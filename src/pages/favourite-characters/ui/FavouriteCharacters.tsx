import { FC } from "react";
import { useCharactersStore } from "src/entities/character";
import { CharacterCard } from "src/widgets/character-card";
import styles from "./FavouriteCharacters.module.scss";

export const FavouriteCharacters: FC = () => {
  const { favourites } = useCharactersStore();

  if (favourites.length === 0)
    return (
      <span>
        The favorites list is empty. Add characters from the main page!
      </span>
    );

  return (
    <div>
      <ul className={styles.charactersCards}>
        {favourites.map((character) => (
          <li className={styles.characterCard} key={character.id}>
            <CharacterCard {...character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
