import { FC } from "react";
import { Character } from "src/entities/character";
import styles from "./CharacterCard.module.scss";
import { Link } from "react-router-dom";

type Props = {
  character: Character;
};

export const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <div className={styles.container}>
      <Link to={"/rick-morty-characters/details"}>
        <div className={styles.wrapper}>
          <img
            className={styles.image}
            src={character.image}
            alt={character.name}
          />
          <div className={styles.info}>
            <span className={styles.text}>{character.name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
