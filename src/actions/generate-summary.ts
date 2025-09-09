"use server";

import { generateAdaptiveSummary, type AdaptiveSummaryInput, type AdaptiveSummaryOutput } from "@/ai/flows/adaptive-resume-summary";

export async function handleGenerateSummary(input: AdaptiveSummaryInput): Promise<AdaptiveSummaryOutput> {
  try {
    const output = await generateAdaptiveSummary(input);
    return output;
  } catch (error) {
    console.error("Error generating adaptive summary:", error);
    // You can customize the error object as needed
    return { adaptiveSummary: "An error occurred while generating the summary. Please try again." };
  }
}
