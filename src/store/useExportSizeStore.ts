import { create } from "zustand";


type ExportSize =
  | "square"
  | "landscape"
  | "portrait";


interface ExportSizeStore {

  size: ExportSize;

  setSize: (
    size: ExportSize
  ) => void;

}


export const useExportSizeStore =
create<ExportSizeStore>((set) => ({

  size: "square",


  setSize: (size) =>
    set({
      size
    })

}));