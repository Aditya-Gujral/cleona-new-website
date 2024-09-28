import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './lib/sanity/schemas';
import { projectId, dataset } from './lib/sanity/config';
import settings from './lib/sanity/schemas/settings';
import { pageStructure, singletonPlugin } from './lib/sanity/plugins/settings';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { table } from '@sanity/table';
import { codeInput } from '@sanity/code-input';
import { InitialValueTemplateItem, DocumentActionComponent } from 'sanity'; // Import necessary types

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ['post'];

export default defineConfig({
  name: 'default',
  title: 'Stablo Template',
  basePath: '/insights/studio',
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure as any, // Ensure correct type casting if necessary
    }),
    singletonPlugin({
      name: 'settings',
      document: {
        // Ensure return type is compatible with InitialValueTemplateItem
        newDocumentOptions: (prev: InitialValueTemplateItem[], { creationContext }) => {
          if (creationContext.type === 'global') {
            // Return only settings document for the global creation context
            return prev.filter(item => item.schemaType === 'settings');
          }
          return prev; // Otherwise, return previous options unchanged
        },
        actions: (prev: DocumentActionComponent[], { schemaType }) => {
          // Custom actions if needed, otherwise return previous actions
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

