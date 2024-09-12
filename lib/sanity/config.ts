// ./lib/sanity/client.ts
import { createClient } from 'next-sanity';

// Configuration for Sanity client
export const useCdn = process.env.NODE_ENV === "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-03-25';
export const previewSecretId = process.env.SANITY_REVALIDATE_SECRET || '';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

// Fetcher function to use in your application
export const fetcher = async ([query, params]: [string, object]) => {
  return client ? client.fetch(query, params) : [];
};

export default client;
