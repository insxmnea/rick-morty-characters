type Info = {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
};

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type FetchedCharactersData = {
  info: Info;
  results: Character[];
};

type CharactersStore = {
  favourites: Character[];
  addFavourite: (character: Character) => void;
  removeFavourite: (id: number) => void;
  isFavourite: (id: number) => boolean;
};

export type { Info, Character, CharactersStore, FetchedCharactersData };
