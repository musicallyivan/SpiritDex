import { create } from "zustand";


interface ExportStore {

  title: string;

  showStats: boolean;

  background:
    | "dark"
    | "light";


  setTitle: (
    title: string
  ) => void;


  setBackground: (
    background: "dark" | "light"
  ) => void;


  toggleStats: () => void;

}


export const useExportStore =
create<ExportStore>((set) => ({

  title: "Mi SpiritDex",

  showStats: true,

  background: "dark",


  setTitle: (title) =>
    set({
      title
    }),


  setBackground: (background) =>
    set({
      background
    }),


  toggleStats: () =>
    set((state) => ({
      showStats:
        !state.showStats
    }))

}));