
"use server";

import { processContactForm, type ContactFormInput, type ContactFormOutput } from "@/flows/contact-flows";

export type { ContactFormInput, ContactFormOutput };

export async function handleContactForm(input: ContactFormInput): Promise<ContactFormOutput> {

  const output = await processContactForm(input);
  return output;
}
