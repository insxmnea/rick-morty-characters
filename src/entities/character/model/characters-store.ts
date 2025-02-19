import { create } from "zustand";
import { CharactersStore } from "../types/models";
import { persist } from "zustand/middleware";

export const useCharactersStore = create<CharactersStore>()(
  persist(
    (set, get) => ({
      info: { count: 0, next: null, pages: 0, prev: null },
      characters: [],
      favourites: [],
      setCharacters: (fetchedCharacters) =>
        set({
          info: fetchedCharacters.info,
          characters: fetchedCharacters.results.map((character) => ({
            ...character,
            isFavourite: false,
          })),
        }),
      addFavourite: (character) =>
        set((state) => ({ favourites: [...state.favourites, character] })),
      removeFavourite: (id) =>
        set((state) => ({
          favourites: state.favourites.filter(
            (character) => character.id !== id
          ),
        })),
      isFavourite: (id: number) =>
        get().favourites.some((item) => item.id === id),
    }),
    {
      name: "favourites",
      partialize: (state) => ({ favourites: state.favourites }),
    }
  )
);
