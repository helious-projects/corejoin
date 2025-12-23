'use server';

import sgMail from '@sendgrid/mail';

import {
  EMAIL_USER,
  SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL,
} from '@/shared/config/env';

import type { ContactForm } from '../model/schema';

export async function sendContactForm({
  email,
  phone,
  firstName,
  lastName,
  message,
}: ContactForm) {
  try {
    if (!SENDGRID_API_KEY) {
      throw new Error('SendGrid API key is not configured.');
    }

    if (!EMAIL_USER) {
      throw new Error('Email user is not configured.');
    }

    if (!SENDGRID_FROM_EMAIL) {
      throw new Error('SendGrid from email is not configured.');
    }

    sgMail.setApiKey(SENDGRID_API_KEY);

    const emailsTo = [EMAIL_USER];

    const msg = {
      to: emailsTo,
      from: SENDGRID_FROM_EMAIL,
      subject: 'New Message from Contact Form',
      html: `<p><b>Full Name:</b> ${firstName} ${lastName}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Phone:</b> ${phone}</p>
       <p><b>Message:</b> ${message}</p>`,
    };

    const res = await sgMail.send(msg);

    // SendGrid returns 202 for successful sends
    return { data: res[0].body, status: res[0].statusCode === 202 ? 'OK' : 'Error' };
  } catch (err: unknown) {
    console.error('Error sending contact form:', err);

    // Handle SendGrid specific errors
    if (err && typeof err === 'object' && 'response' in err) {
      const sendGridError = err as {
        response?: {
          body?: {
            errors?: Array<{ message?: string; field?: string }>;
          };
        };
        message?: string;
      };

      const errorDetails =
        sendGridError.response?.body?.errors
          ?.map((e) => `${e.field || 'Error'}: ${e.message || 'Unknown'}`)
          .join(', ') || sendGridError.message || 'Unknown SendGrid error';

      console.error('SendGrid error details:', sendGridError.response?.body);
      throw new Error(`Failed to send email: ${errorDetails}`);
    }

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Unknown error occurred.');
  }
}
