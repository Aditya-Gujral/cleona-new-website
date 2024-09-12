import { type DocumentDefinition } from "sanity";

// Define a simplified StructureResolver type
type StructureResolver = (S: any) => any;

// Define a simplified CreationContext type
type CreationContext = {
  type: string;
};

interface NewDocumentOptionsParams {
  prev: any[]; // Adjust based on actual type
  creationContext: CreationContext;
}

interface ActionsParams {
  prev: any[]; // Adjust based on actual type
  schemaType: string;
}

export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Singletons (such as Settings)' from new document options
      newDocumentOptions: ({ prev, creationContext }: NewDocumentOptionsParams) => {
        if (creationContext.type === "global") {
          return prev.filter(
            templateItem => !types.includes(templateItem.templateId)
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: ({ prev, schemaType }: ActionsParams) => {
        if (types.includes(schemaType)) {
          return prev.filter(
            ({ action }) =>
              !["unpublish", "delete", "duplicate"].includes(action)
          );
        }

        return prev;
      }
    }
  };
};

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[]
): StructureResolver => {
  return (S: any) => {
    // Define custom list items and structure
    const singletonItems = typeDefArray.map(typeDef => {
      return {
        title: typeDef.title || "",
        icon: typeDef.icon,
        child: {
          id: typeDef.name,
          schemaType: typeDef.name,
          documentId: typeDef.name,
          views: [
            // Default form view
            { type: "form" }
          ]
        }
      };
    });

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      listItem =>
        !typeDefArray.find(
          singleton => singleton.name === listItem.getId()
        )
    );

    return {
      title: "Content",
      items: [...singletonItems, { type: "divider" }, ...defaultListItems]
    };
  };
};

