import { redirect } from 'next/navigation';
import { createSupabaseClient } from '../../lib/supabase';
import { subscriptionSchema } from '../../lib/validators';

export async function subscribe(formData: FormData) {
  'use server';

  const email = formData.get('email');
  const source = String(formData.get('source') ?? 'landing_page');

  const result = subscriptionSchema.safeParse({ email });
  if (!result.success) {
    throw new Error('Please enter a valid email address.');
  }

  const supabase = createSupabaseClient();
  const { error } = await supabase
    .from('subscribers')
    .insert({
      email: result.data.email,
      source
    });

  if (error) {
    throw new Error('Unable to save your email right now. Please try again later.');
  }

  redirect('/thank-you');
}
