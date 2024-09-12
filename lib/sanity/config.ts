// ./sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk-tool';
import { schemaTypes } from './schemas'; // Import your schema types here

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-03-25',
  useCdn: process.env.NODE_ENV === 'production',
  plugins: [
    deskTool({
      structure: (S) => S.list()
        .title('Content')
        .items([
          S.documentTypeListItem('lesson').title('Lessons'),
          // Add more document types here as needed
        ]),
    }),
  ],
  schema: {
    types: schemaTypes, // Define your schemas here
  },
});
