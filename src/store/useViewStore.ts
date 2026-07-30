import { create } from "zustand";


interface ViewStore {
  view: "modern" | "collection" | "table";


  setView: (
    view: "modern" | "collection" | "table"
  ) => void;

}


export const useViewStore = create<ViewStore>((set) => ({

  view: "modern",


  setView: (view) =>
    set({
      view
    })

}));