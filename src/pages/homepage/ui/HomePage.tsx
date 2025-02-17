import { FC } from "react";
import styles from "./HomePage.module.scss";
import {
  fetchCharacters,
  FetchedCharactersData,
  useCharactersStore,
} from "src/entities/character";
import { useQuery } from "react-query";
import { CharacterCard } from "src/widgets/character-card/ui/CharacterCard";

export const HomePage: FC = () => {
  const { characters, setCharacters } = useCharactersStore();
  const { isError, isLoading } = useQuery("characters", fetchCharacters, {
    onSuccess: (fetchedCharacters: FetchedCharactersData) => {
      setCharacters(fetchedCharacters);
    },
  });

  if (isLoading) return <div>Consulting the spellbook...</div>;
  if (isError) return <div>Error retrieving spells</div>;

  return (
    <div>
      <ul className={styles.charactersCards}>
        {characters.map((character) => (
          <li className={styles.characterCard} key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
