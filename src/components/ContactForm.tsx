"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

type FormData = z.infer<typeof schema>;

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] text-primary" id="contact">
      <h2 className="text-center text-4xl font-heading mb-12">GET IN TOUCH</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto space-y-6 px-6"
        noValidate
      >
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register('name')}
            className="w-full p-3 bg-[#1A1A1A] border border-[rgba(244,241,234,0.15)] text-primary placeholder:text-secondary focus:outline-none focus:border-accent"
          />
          {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="w-full p-3 bg-[#1A1A1A] border border-[rgba(244,241,234,0.15)] text-primary placeholder:text-secondary focus:outline-none focus:border-accent"
          />
          {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={5}
            {...register('message')}
            className="w-full p-3 bg-[#1A1A1A] border border-[rgba(244,241,234,0.15)] text-primary placeholder:text-secondary focus:outline-none focus:border-accent"
          />
          {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>}
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 bg-accent text-[#0A0A0A] font-heading hover:bg-accent/90 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-400 mt-2">Oops! Something went wrong.</p>}
      </form>
    </section>
  );
};
