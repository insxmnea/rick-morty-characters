import { create } from "zustand";
import { CharactersState } from "../types/models";

export const useCharactersStore = create<CharactersState>((set) => ({
  info: { count: 0, next: null, pages: 0, prev: null },
  characters: [],
  addCharacter: (character) =>
    set((state) => ({
      characters: [...state.characters, character],
    })),
  setCharacters: (fetchedCharacters) =>
    set({
      info: fetchedCharacters.info,
      characters: fetchedCharacters.results,
    }),
}));
