import { create } from "zustand";

interface FilterStore {

  sort:
    | "name"
    | "level"
    | "mastery"
    | "rarity"
    | "element";

  setSort: (
    value:
      | "name"
      | "level"
      | "mastery"
      | "rarity"
      | "element"
  ) => void;

  search: string;

  filter:
    | "all"
    | "owned"
    | "lost"
    | "mastery"
    | "favorite";

  element: string;

  rarity: string;

  setSearch: (value: string) => void;

  setFilter: (
    value:
      | "all"
      | "owned"
      | "lost"
      | "mastery"
      | "favorite"
  ) => void;

  setElement: (value: string) => void;

  setRarity: (value: string) => void;

}

export const useFilterStore = create<FilterStore>((set) => ({

  search: "",

  filter: "all",

  element: "Todos",

  rarity: "Todas",

  sort: "name",

  setSearch: (value) =>
    set({
      search: value
    }),

  setFilter: (value) =>
    set({
      filter: value
    }),

  setElement: (value) =>
    set({
      element: value
    }),

  setRarity: (value) =>
    set({
      rarity: value
    }),
  
  setSort: (value) =>
    set({
      sort: value
    })

}));