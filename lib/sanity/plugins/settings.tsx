import { type DocumentDefinition } from "sanity";
import S from "@sanity/desk-tool/structure-builder"; // Adjust import based on your setup

interface NewDocumentOptionsParams {
  creationContext: { type: string };
}

interface DocumentTypeListItem {
  getId: () => string;
}

// Plugin to handle singletons
export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      newDocumentOptions: (prev: any[], { creationContext }: NewDocumentOptionsParams) => {
        if (creationContext.type === "global") {
          return prev.filter(
            (templateItem) => !types.includes(templateItem.templateId)
          );
        }

        return prev;
      },
      actions: (prev: any[], { schemaType }: { schemaType: string }) => {
        if (types.includes(schemaType)) {
          return prev.filter(
            ({ action }) =>
              !["unpublish", "delete", "duplicate"].includes(action)
          );
        }

        return prev;
      },
    },
  };
};

// StructureResolver for desk tool
export const pageStructure = (
  typeDefArray: DocumentDefinition[]
): (S: any) => any => {
  return (S) => {
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title || "")
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
            .views([
              S.view.form(),
            ])
        );
    });

    const defaultListItems = S.documentTypeListItems().filter(
      (listItem: DocumentTypeListItem) =>
        !typeDefArray.find(
          (singleton) => singleton.name === listItem.getId()
        )
    );

    return S.list()
      .title("Content")
      .items([...singletonItems, S.divider(), ...defaultListItems]);
  };
};

