import React, { useState } from "react";
import "./../../pages/styles/FolderStructure.css";
import { IFolderStruct } from "./IFolderStructure";

const FolderStructure = ({
  fileData,
  addTreeNode,
}: Props): React.ReactElement => {
  const [showChild, setShowChild] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [isNewFolder, setIsNewFolder] = useState(false);

  interface CommonKeyboardEvent<T> extends React.KeyboardEvent<T> {
    target: EventTarget & T;
  }

  type KeyDownEvent<T> = CommonKeyboardEvent<T>;

  const { id, isFolder, items, name } = fileData;

  const handleFolderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowNew(true);
    setIsNewFolder(true);
  };

  const handleFileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowNew(true);
    setIsNewFolder(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setShowNew(false);
  };

  const addNode = (e: KeyDownEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && e.target.value !== "") {
      addTreeNode(id, e.target.value, isNewFolder);
      setShowNew(false);
    }
  };

  return (
    <div style={{ width: "max-content" }}>
      <div className="folder__cont" onClick={() => setShowChild(!showChild)}>
        <div>
          <span className={`${isFolder ? "folder__name" : ""}`}>
            {isFolder ? "🗂️" : "🗄️"} {name}
          </span>
        </div>
        {isFolder && (
          <div style={{ marginLeft: "8px" }}>
            <button onClick={handleFolderClick}>+Folder</button>
            <button onClick={handleFileClick}>+File</button>
          </div>
        )}
      </div>
      {showNew && (
        <div style={{ marginLeft: "12px" }}>
          <span>{isNewFolder ? "🗂️" : "🗄️"}</span>
          <input
            type="text"
            onBlur={handleBlur}
            onKeyDown={addNode}
            autoFocus
          />
        </div>
      )}
      {showChild && (
        <div>
          {isFolder ? (
            <div style={{ marginLeft: "10px" }}>
              {items.map((item) => {
                return (
                  <FolderStructure
                    key={item.id}
                    fileData={item}
                    addTreeNode={addTreeNode}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default FolderStructure;

interface Props {
  fileData: IFolderStruct;
  addTreeNode: (targetId: number, name: string, isFolder: boolean) => void;
}
