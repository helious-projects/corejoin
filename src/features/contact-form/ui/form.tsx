'use client';

import { type ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { contactSchema } from '@/features/contact-form/model/schema';

import { useForm } from '@/shared/lib/forms';
import { notifyError } from '@/shared/lib/utils/notify';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import { sendContactForm } from '../api/send-contact-form';

const ThankYouDialog = dynamic(
  () => import('./dialog').then(mod => mod.ThankYouDialog),
  {
    ssr: false,
  },
);

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validators: {
      onChange: contactSchema,
    },
    onSubmit: async ({ value }) => {
      const { status } = await sendContactForm(value);

      if (status === 'OK') {
        setIsOpen(true);
        reset();
      } else {
        notifyError('Failed to send message. Try again later.');
      }
    },
  });

  return (
    <form
      className="z-20 flex flex-col gap-4"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <FormRow>
        <Field name="firstName">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              placeholder="Enter Your Name"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              intent={state.meta.errors.length ? 'danger' : 'primary'}
              required
            />
          )}
        </Field>
        <Field name="lastName">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              placeholder="Last Name"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              intent={state.meta.errors.length ? 'danger' : 'primary'}
              required
            />
          )}
        </Field>
      </FormRow>
      <FormRow>
        <Field name="email">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              placeholder="Email"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              intent={state.meta.errors.length ? 'danger' : 'primary'}
              required
            />
          )}
        </Field>
        <Field name="phone">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              placeholder="Phone Number"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              intent={state.meta.errors.length ? 'danger' : 'primary'}
              required
            />
          )}
        </Field>
      </FormRow>
      <Field name="message">
        {({ name, state, handleBlur, handleChange }) => (
          <TextArea
            name={name}
            placeholder="Send us a message"
            value={String(state.value)}
            onBlur={handleBlur}
            onChange={e => handleChange(e.target.value)}
            intent={state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit} className="z-20">
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send a request <ArrowRightIcon />
              </>
            )}
          </Button>
        )}
      </Subscribe>
      <ThankYouDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </form>
  );
};

const FormRow = ({ children }: { children: ReactNode }) => (
  <div className="flex gap-4 max-md:flex-col">{children}</div>
);
