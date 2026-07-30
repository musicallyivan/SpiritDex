import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { UserSpirit } from "../models/UserSpirit";


interface CollectionStore {

  collection: Record<string, UserSpirit>;

  updateSpirit: (
    id: string,
    data: Partial<UserSpirit>
  ) => void;

  setCollection: (
    collection: Record<string, UserSpirit>
  ) => void;
  
}


export const useCollectionStore = create<CollectionStore>()(

  persist(

    (set) => ({

      collection: {},

      updateSpirit: (id, data) =>

        set((state) => ({

          collection: {

            ...state.collection,

            [id]: {

              ...(state.collection[id] ?? {

                spiritId: id,

                owned: false,

                level: 1,

                mastery: 0,

                favorite: false,

                lost: false,

                variant: "Normal",

                notes: "",

              }),

              ...data,

              updatedAt: new Date().toISOString()

            }

          }

        })),

      setCollection: (collection) =>

        set({
          collection
        })

    }),

    {
      name: "spiritdex-collection",
      version: 1
    }

  )

);