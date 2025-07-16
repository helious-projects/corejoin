import { isPhoneValid, v } from '@/shared/lib/forms';

export const contactSchema = v.object({
  firstName: v.pipe(v.string(), v.minLength(2, 'Please enter your name.')),
  lastName: v.pipe(v.string(), v.minLength(2, 'Please enter your name.')),
  email: v.pipe(v.string(), v.email('Please enter your email address.')),
  phone: v.pipe(
    v.string(),
    v.minLength(1, 'Please enter your phone.'),
    v.custom(
      (input: unknown) => isPhoneValid(String(input)),
      'Please enter a valid phone number.',
    ),
  ),
  message: v.pipe(v.string(), v.minLength(1, 'Please enter your message.')),
});

export type ContactForm = v.InferOutput<typeof contactSchema>;
