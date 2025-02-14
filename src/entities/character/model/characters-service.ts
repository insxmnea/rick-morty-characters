export const fetchCharacters = async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=1`
  );

  if (!response.ok) {
    throw new Error("Could not fetch characters");
  }

  return response.json();
};
