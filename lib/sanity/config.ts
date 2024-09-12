import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { pageStructure } from './structure';

export default defineConfig({
  name: 'default',
  title: 'My Sanity Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-03-25',

  plugins: [
    deskTool({
      structure: pageStructure,
    }),
    // Other plugins
  ],
  
  // Optional: Uncomment if you need a defaultDocumentNode
  // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
});
