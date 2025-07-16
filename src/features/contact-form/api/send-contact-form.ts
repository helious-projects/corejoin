'use server';

import { google } from 'googleapis';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_REFRESH_TOKEN,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeEmailBody } from '@/shared/lib/utils/email';

import type { ContactForm } from '../model/schema';

export async function sendContactForm({
  email,
  phone,
  firstName,
  lastName,
  message,
}: ContactForm) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const adminBody = makeEmailBody({
      to: EMAIL_USER,
      from: EMAIL_USER,
      subject: 'New Message from Contact Form',
      message: `<p><b>Full Name:</b> ${firstName} ${lastName}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Phone:</b> ${phone}</p>
       <p><b>Message:</b> ${message}</p>`,
    });

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: adminBody,
      },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to send email. Status: ${res.status}`);
    }

    return { data: res.data, status: res.statusText };
  } catch (err: unknown) {
    console.error('Error order product:', err);

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Unknown error occurred.');
  }
}
