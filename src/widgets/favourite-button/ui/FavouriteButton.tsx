import { FC } from "react";
import { Character, useCharactersStore } from "src/entities/character";
import { FavouriteIcon } from "src/shared/assets/icons";
import styles from "./FavouriteButton.module.scss";
import { toast } from "react-toastify";

interface Props extends Character {}

export const FavouriteButton: FC<Props> = (props) => {
  const { addFavourite, removeFavourite, isFavourite } = useCharactersStore();

  const handleClick = () => {
    if (!isFavourite(props.id)) {
      addFavourite({ ...props });
      toast(`${props.name} was added to favourites!`);
    } else {
      removeFavourite(props.id);
      toast(`${props.name} was removed from favourites`);
    }
  };

  return (
    <button className={styles.wrapper} onClick={handleClick}>
      <FavouriteIcon isActive={isFavourite(props.id)} />
    </button>
  );
};
