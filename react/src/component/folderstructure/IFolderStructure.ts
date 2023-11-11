
export interface IFolderStruct {
    id: number;
    name: string;
    isFolder: boolean;
    items: IFolderStruct[];
  }