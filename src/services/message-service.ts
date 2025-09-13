// IMPORTANT: This file is used by a server-side Genkit flow and uses Node.js file system APIs.
// It will not work in a client-side environment.
'use server';

import { promises as fs } from 'fs';
import path from 'path';

// Define the shape of a message object
export interface Message {
  name: string;
  email: string;
  subject: string;
  message: string;
  receivedAt: string; // ISO 8601 date string
}

// Path to the JSON file that acts as our simple database
const messagesFilePath = path.join(process.cwd(), 'src', 'lib', 'messages.json');

/**
 * Reads all messages from the JSON file.
 * @returns A promise that resolves to an array of messages.
 */
export async function getMessages(): Promise<Message[]> {
  try {
    const data = await fs.readFile(messagesFilePath, 'utf-8');
    // Ensure that if the file is empty, we return an empty array
    return data ? JSON.parse(data) : [];
  } catch (error: any) {
    // If the file doesn't exist, it means no messages have been sent yet.
    if (error.code === 'ENOENT') {
      return [];
    }
    // For other errors, log them and re-throw.
    console.error('Failed to read messages:', error);
    throw new Error('Could not retrieve messages.');
  }
}

/**
 * Adds a new message to the JSON file.
 * @param newMessage The message object to add.
 * @returns A promise that resolves when the operation is complete.
 */
export async function addMessage(newMessage: Omit<Message, 'receivedAt'>): Promise<void> {
  try {
    // Get the current list of messages
    const messages = await getMessages();

    // Add the new message with a timestamp
    const messageWithTimestamp: Message = {
      ...newMessage,
      receivedAt: new Date().toISOString(),
    };
    messages.unshift(messageWithTimestamp); // Add to the beginning of the array

    // Write the updated list back to the file
    await fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to add message:', error);
    throw new Error('Could not save the message.');
  }
}
