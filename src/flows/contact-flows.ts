'use server';

import {ai} from '@/flows/genkit';
import {z} from 'genkit';
import { addMessage } from '@/services/message-service';

const ContactFormInputSchema = z.object({
  name: z.string().describe("The sender's name."),
  email: z.string().email().describe("The sender's email address."),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  reply: z
    .string()
    .describe('A friendly, polite confirmation message to the sender.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

const contactFormPrompt = ai.definePrompt({
  name: 'contactFormPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are a helpful assistant for a developer named Alex Johnson.
Someone has submitted a contact form on Alex's portfolio website.
Your task is to generate a brief, friendly, and professional confirmation message that will be shown to the sender.

Acknowledge the sender by their name, and confirm that their message has been received.
Assure them that Alex will get back to them at their provided email address as soon as possible.
Do not repeat the subject or the message content. Keep it short and polite.

Sender's Name: {{name}}
Sender's Email: {{email}}
Subject: {{subject}}
Message:
{{message}}`,
});

const contactFormFlow = ai.defineFlow(
  {
    name: 'contactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    await addMessage({
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
    });
    console.log(`Message from ${input.name} saved successfully.`);

    const response = await contactFormPrompt(input);
    const output = response.output;
    if (!output) {
      throw new Error("Flow execution failed to produce output.");
    }
    return output;
  }
);

export async function processContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFormFlow(input);}