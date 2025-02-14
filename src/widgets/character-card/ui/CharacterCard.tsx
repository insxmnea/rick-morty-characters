import { FC } from "react";
import { Character } from "src/entities/character";
import styles from "./CharacterCard.module.scss";
import { Link } from "react-router-dom";

type Props = {
  character: Character;
};

export const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <div>
      <Link to={"/rick-morty-characters/details"}>
        <div className={styles.wrapper}>
          <img src={character.image} alt={character.name} />
          <span>{character.name}</span>
        </div>
      </Link>
    </div>
  );
};
