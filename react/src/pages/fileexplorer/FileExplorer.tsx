import React, { useState } from "react";
import FolderStructure from "../../component/folderstructure/FolderStructure";
import { fileData } from "./fileData";
import { useFolderTree } from "../../component/folderstructure/useFolderTree";
import { IFolderStruct } from "../../component/folderstructure/IFolderStructure";

const FileExplorer = () => {
  const [treeData, setTreeData] = useState<IFolderStruct>(fileData);

  const { insertTreeNode } = useFolderTree();

  const addTreeNode = (targetId: number, name: string, isFolder: boolean) => {
    const updatedTree = insertTreeNode(treeData, targetId, name, isFolder);
    setTreeData(updatedTree);
  }

  return (
    <div>
      <FolderStructure fileData={treeData} addTreeNode={addTreeNode} />
    </div>
  );
};

export default FileExplorer;
