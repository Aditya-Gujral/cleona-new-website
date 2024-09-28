import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './lib/sanity/schemas';
import {
  projectId,
  dataset,
  previewSecretId
} from './lib/sanity/config';
import settings from './lib/sanity/schemas/settings';
import {
  pageStructure,
  singletonPlugin
} from './lib/sanity/plugins/settings';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { table } from '@sanity/table';
import { codeInput } from '@sanity/code-input';

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
      structure: pageStructure as any, // Adjusted type casting
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin({
      name: 'settings',
      document: {
        newDocumentOptions: (prev: any[], { creationContext }) => {
          // Adjust the return value as needed
          return prev; // Modify as needed based on your requirements
        },
        actions: (prev: any[], { schemaType }) => {
          return prev; // Modify actions if needed
        },
      },
    }),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput()
  ],

  schema: {
    types: schemaTypes
  }
});
