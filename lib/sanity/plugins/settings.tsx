import { type DocumentDefinition, type DocumentOptions, type StructureResolver, type CreationContext } from "sanity";
import S from '@sanity/desk-tool/structure-builder'; // Adjust import based on your setup

interface NewDocumentOptionsParams {
  prev: DocumentOptions[]; // Adjust based on your actual type
  creationContext: CreationContext;
}

interface ActionsParams {
  prev: Array<{ action: string }>; // Adjust based on your actual type
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
  return S => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map(typeDef => {
      return S.listItem()
        .title(typeDef.title || "")
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
            .views([
              // Default form view
              S.view.form()
            ])
        );
    });

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      listItem =>
        !typeDefArray.find(
          singleton => singleton.name === listItem.getId()
        )
    );

    return S.list()
      .title("Content")
      .items([...singletonItems, S.divider(), ...defaultListItems]);
  };
};
