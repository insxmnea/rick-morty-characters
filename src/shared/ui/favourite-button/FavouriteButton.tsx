import { FC } from "react";
import { useCharactersStore } from "src/entities/character";
import { FavouriteIcon } from "src/shared/assets/icons";
import styles from "./FavouriteButton.module.scss";

type Props = {
  id: number;
};

export const FavouriteButton: FC<Props> = (props) => {
  const { addFavourite, removeFavourite, isFavourite, characters } =
    useCharactersStore();

  const handleClick = () => {
    if (!isFavourite(props.id)) {
      const character = characters.find(
        (character) => character.id === props.id
      );

      if (character) addFavourite({ ...character });
    } else {
      removeFavourite(props.id);
    }
  };

  return (
    <button className={styles.wrapper} onClick={handleClick}>
      <FavouriteIcon isActive={isFavourite(props.id)} />
    </button>
  );
};
