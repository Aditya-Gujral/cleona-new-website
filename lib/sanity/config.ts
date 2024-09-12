import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk-tool';
import { previewDocumentNode } from 'sanity/preview';

// Define your project configuration
export const useCdn = process.env.NODE_ENV === "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-default-project-id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-03-25';
export const previewSecretId = process.env.SANITY_REVALIDATE_SECRET || 'your-default-preview-secret';

// Define your Sanity configuration
export default defineConfig({
  name: 'default',
  title: 'My Sanity Studio',

  projectId,
  dataset,
  apiVersion,
  useCdn,

  plugins: [
    deskTool({
      structure: (S) => S.list()
        .title('Content')
        .items([
          S.documentTypeListItem('lesson').title('Lessons'),
          // Add more items as needed
        ]),
    }),
    // Add other plugins as needed
  ],

  defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
});

