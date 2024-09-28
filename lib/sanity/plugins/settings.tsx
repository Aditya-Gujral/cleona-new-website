<<<<<<< HEAD
import { type DocumentDefinition, type TemplateItem } from "sanity"; // Import necessary types
import { type StructureResolver } from "sanity/desk";
import { type DocumentActionComponent } from "sanity"; // Ensure this is imported for actions

=======
import { type DocumentDefinition } from "sanity";
import { type StructureResolver } from "sanity/desk";
import { type InitialValueTemplateItem, type DocumentActionComponent } from "sanity";

// Define the plugin function
>>>>>>> origin/main
export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Singletons (such as Settings)' from new document options
<<<<<<< HEAD
      newDocumentOptions: (prev: TemplateItem[], { creationContext }: { creationContext: { type: string } }) => {
=======
      newDocumentOptions: (
        prev: InitialValueTemplateItem[], // Explicitly type prev
        { creationContext }: { creationContext: { type: string } }
      ) => {
>>>>>>> origin/main
        if (creationContext.type === "global") {
          return prev.filter(
            templateItem => !types.includes(templateItem.templateId)
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
<<<<<<< HEAD
      actions: (prev: DocumentActionComponent[], { schemaType }: { schemaType: string }): DocumentActionComponent[] => {
        if (types.includes(schemaType)) {
          return prev.filter(
            ({ action }) =>
              action !== undefined && !["unpublish", "delete", "duplicate"].includes(action) // Ensure action is defined
=======
      actions: (
        prev: DocumentActionComponent[], // Explicitly type prev
        { schemaType }: { schemaType: string }
      ) => {
        if (types.includes(schemaType)) {
          return prev.filter(
            ({ action }) =>
              action !== undefined && // Ensure action is defined
              !["unpublish", "delete", "duplicate"].includes(action)
>>>>>>> origin/main
          );
        }

        return prev;
<<<<<<< HEAD
      }
    }
  };
};


=======
      },
    },
  };
};

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
>>>>>>> origin/main
export const pageStructure = (
  typeDefArray: DocumentDefinition[]
): StructureResolver => {
  return S => {
<<<<<<< HEAD
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
=======
    // Goes through all of the singletons that were provided and translates them into something the DeskTool can understand
>>>>>>> origin/main
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
<<<<<<< HEAD
              S.view.form()
=======
              S.view.form(),
>>>>>>> origin/main
            ])
        );
    });

    // The default root list items (except custom ones)
<<<<<<< HEAD
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
=======
    const defaultListItems = S.documentTypeListItems().filter(listItem =>
      !typeDefArray.find(singleton => singleton.name === listItem.getId())
    );

    return S.list().title("Content").items([...singletonItems, S.divider(), ...defaultListItems]);
  };
};

>>>>>>> origin/main
