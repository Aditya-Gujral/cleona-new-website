import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './lib/sanity/schemas';
import {
  projectId,
  dataset,
  previewSecretId
} from './lib/sanity/config';
import {
  pageStructure,
  singletonPlugin
} from './lib/sanity/plugins/settings';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { table } from '@sanity/table';
import { codeInput } from '@sanity/code-input';

// Ensure the document types are correctly defined
export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ['post'];
console.log(projectId);

export default defineConfig({
  name: 'default',
  title: 'Stablo Template',
  basePath: '/insights/studio',
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure as any, // Type casting can be adjusted
    }),
    singletonPlugin({
      name: 'settings',
      document: {
        newDocumentOptions: (prev: TemplateItem[], { creationContext }) => {
          // Ensure 'prev' matches the expected type
          return prev as TemplateItem[]; // Cast 'prev' correctly
        },
        actions: (prev: DocumentActionComponent[], { schemaType }) => {
          // Return the previous actions or modify as needed
          return prev;
        },
      },
    }),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});

  schema: {
    types: schemaTypes,
  },
});
