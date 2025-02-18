import { FC } from "react";
import { Character } from "src/entities/character";
import styles from "./CharacterCard.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "src/app/router";

interface Props extends Character {}

export const CharacterCard: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Link to={`${ROUTES.DETAILS}?id=${props.id}`}>
        <div className={styles.wrapper}>
          <img className={styles.image} src={props.image} alt={props.name} />
          <div className={styles.info}>
            <span className={styles.text}>{props.name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
