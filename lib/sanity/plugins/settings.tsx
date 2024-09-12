import type { StructureResolver } from 'sanity/structure';

interface DocumentDefinition {
  title?: string;
  icon?: React.ComponentType;
  name: string;
}

// Plugin to handle singletons
export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      newDocumentOptions: (prev: any[], { creationContext }: { creationContext: { type: string } }) => {
        if (creationContext.type === "global") {
          return prev.filter(
            (templateItem: { templateId: string }) => !types.includes(templateItem.templateId)
          );
        }

        return prev;
      },
      actions: (prev: any[], { schemaType }: { schemaType: string }) => {
        if (types.includes(schemaType)) {
          return prev.filter(
            ({ action }: { action: string }) =>
              !["unpublish", "delete", "duplicate"].includes(action)
          );
        }

        return prev;
      },
    },
  };
};

// StructureResolver for desk tool
export const pageStructure: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('lesson').title('Lessons'),
      // You can add more document type list items here
    ]);
};

