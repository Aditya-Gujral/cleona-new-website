import { type DocumentDefinition, type TemplateItem } from "sanity"; // Import necessary types
import { type StructureResolver } from "sanity/desk";
import { type DocumentActionComponent } from "sanity"; // Ensure this is imported for actions

export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Singletons (such as Settings)' from new document options
      newDocumentOptions: (prev: TemplateItem[], { creationContext }: { creationContext: { type: string } }) => {
        if (creationContext.type === "global") {
          return prev.filter(
            templateItem => !types.includes(templateItem.templateId)
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev: DocumentActionComponent[], { schemaType }: { schemaType: string }): DocumentActionComponent[] => {
        if (types.includes(schemaType)) {
          return prev.filter(
            ({ action }) =>
              action !== undefined && !["unpublish", "delete", "duplicate"].includes(action) // Ensure action is defined
          );
        }

        return prev;
      }
    }
  };
};


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
