import { create } from "zustand";


type ExportFilter =
  | "all"
  | "owned"
  | "mastery"
  | "favorite"
  | "lost";


interface ExportFilterStore {

  filter: ExportFilter;

  setFilter: (
    filter: ExportFilter
  ) => void;

}


export const useExportFilterStore =
create<ExportFilterStore>((set) => ({

  filter: "all",


  setFilter: (filter) =>
    set({
      filter
    })

}));