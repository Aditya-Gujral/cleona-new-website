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
import { InitialValueTemplateItem, NewDocumentOptionsResolver, DocumentActionComponent } from 'sanity';

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ['post'];

export default defineConfig({
  name: 'default',
  title: 'Stablo Template',
  basePath: '/insights/studio',
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure as any, // Adjust type casting if necessary
    }),
    singletonPlugin({
      name: 'settings',
      document: {
        // Properly type the function according to Sanity's expectations
        newDocumentOptions: (prev: InitialValueTemplateItem[], { creationContext }) => {
          if (creationContext.type === 'global') {
            // Ensure we're returning items that match InitialValueTemplateItem type
            return prev.filter((item) => item.schemaType === 'settings');
          }
          return prev;
        },
        actions: (prev: DocumentActionComponent[], { schemaType }) => {
          if (schemaType === 'settings') {
            // Customize actions or return default ones
            return prev;
          }
          return prev;
        }
      }
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

