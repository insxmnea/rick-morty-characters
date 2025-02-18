import { QueryFunctionContext } from "react-query";

const API_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async ({
  queryKey,
}: QueryFunctionContext<[string, { page: string; name: string }]>) => {
  const [_key, { page, name }] = queryKey;
  const response = await fetch(
    `${API_URL}/character/?name=${name}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Could not fetch characters");
  }

  return response.json();
};

export const fetchCharacter = async ({
  queryKey,
}: QueryFunctionContext<[string, { id: string }]>) => {
  const [_key, { id }] = queryKey;

  const response = await fetch(`${API_URL}/character/${id}`);

  if (!response.ok) {
    throw new Error("Could not fetch character");
  }

  return response.json();
};
