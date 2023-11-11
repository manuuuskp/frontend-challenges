import { IFolderStruct } from "./IFolderStructure";

function useFolderTree() {
  function insertTreeNode(
    tree: IFolderStruct,
    targetId: number,
    name: string,
    isFolder: boolean
  ): IFolderStruct {
    if (tree.id === targetId && tree.isFolder) {
      const nodeObj: IFolderStruct = {
        id: new Date().getTime(),
        items: [],
        isFolder,
        name,
      };
      tree.items.unshift(nodeObj);
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((obj) =>
      insertTreeNode(obj, targetId, name, isFolder)
    );

    return { ...tree, items: latestNode };
  }

  return { insertTreeNode };
}

export { useFolderTree };
