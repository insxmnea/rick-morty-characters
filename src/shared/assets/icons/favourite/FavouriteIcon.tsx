import { FC } from "react";
import styles from "./FavouriteIcon.module.scss";
import classNames from "classnames";

type Props = {
  isActive: boolean;
};

export const FavouriteIcon: FC<Props> = (props) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(styles.icon, { [styles.active]: props.isActive })}
    >
      <path
        d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
        fill="current"
      />
    </svg>
  );
};
