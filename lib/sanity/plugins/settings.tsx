import { type DocumentDefinition, type TemplateItem } from "sanity";
import { type StructureResolver } from "sanity/desk";
import { type InitialValueTemplateItem, type DocumentActionComponent } from "sanity";

// Define the plugin function
export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Singletons (such as Settings)' from new document options
      newDocumentOptions: (
        prev: InitialValueTemplateItem[], // Ensure this matches the expected type
        { creationContext }: { creationContext: { type: string } }
      ) => {
        if (creationContext.type === "global") {
          return prev.filter(
            templateItem => !types.includes(templateItem.templateId)
          );
        }
        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (
        prev: DocumentActionComponent[], // Ensure this matches the expected type
        { schemaType }: { schemaType: string }
      ) => {
        if (types.includes(schemaType)) {
          return prev.filter(
            ({ action }) =>
              action !== undefined && // Ensure action is defined
              !["unpublish", "delete", "duplicate"].includes(action)
          );
        }
        return prev;
      },
    },
  };
};

// The StructureResolver is how we're changing the DeskTool structure to link to document (named Singleton)
export const pageStructure = (
  typeDefArray: DocumentDefinition[]
): StructureResolver => {
  return S => {
    // Goes through all of the singletons that were provided and translates them into something the DeskTool can understand
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
              S.view.form(),
            ])
        );
    });

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(listItem =>
      !typeDefArray.find(singleton => singleton.name === listItem.getId())
    );

    return S.list().title("Content").items([...singletonItems, S.divider(), ...defaultListItems]);
  };
};

