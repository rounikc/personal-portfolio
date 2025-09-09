'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating adaptive resume summaries tailored to specific jobs or fields.
 *
 * The flow takes a resume and a job description as input and uses an LLM to generate a summary
 * that highlights the most relevant experiences and skills for the job.
 *
 * @file        src/ai/flows/adaptive-resume-summary.ts
 * @exports   generateAdaptiveSummary - The main function to generate the adaptive resume summary.
 * @exports   AdaptiveSummaryInput - The input type for the generateAdaptiveSummary function.
 * @exports   AdaptiveSummaryOutput - The output type for the generateAdaptiveSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const AdaptiveSummaryInputSchema = z.object({
  resume: z.string().describe('The resume of the user.'),
  jobDescription: z
    .string()
    .describe(
      'The job description or field for which the resume summary should be adapted.'
    ),
});
export type AdaptiveSummaryInput = z.infer<typeof AdaptiveSummaryInputSchema>;

// Define the output schema
const AdaptiveSummaryOutputSchema = z.object({
  adaptiveSummary: z
    .string()
    .describe(
      'A summary of the resume, highlighting the most relevant experiences and skills for the job description.'
    ),
});
export type AdaptiveSummaryOutput = z.infer<typeof AdaptiveSummaryOutputSchema>;

// Define the prompt
const adaptiveSummaryPrompt = ai.definePrompt({
  name: 'adaptiveSummaryPrompt',
  input: {schema: AdaptiveSummaryInputSchema},
  output: {schema: AdaptiveSummaryOutputSchema},
  prompt: `You are an expert resume writer. You will generate a summary of the resume, highlighting the most relevant experiences and skills for the job description.

Resume:
{{resume}}

Job Description:
{{jobDescription}}`,
});

// Define the flow
const adaptiveSummaryFlow = ai.defineFlow(
  {
    name: 'adaptiveSummaryFlow',
    inputSchema: AdaptiveSummaryInputSchema,
    outputSchema: AdaptiveSummaryOutputSchema,
  },
  async input => {
    const {output} = await adaptiveSummaryPrompt(input);
    return output!;
  }
);

/**
 * Generates an adaptive summary of the resume.
 *
 * @param input - The input for the adaptive summary generation.
 * @returns A promise that resolves to the adaptive summary output.
 */
export async function generateAdaptiveSummary(input: AdaptiveSummaryInput): Promise<AdaptiveSummaryOutput> {
  return adaptiveSummaryFlow(input);
}
