import { FC } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/app/router";

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <NavLink to={ROUTES.HOMEPAGE}>Home</NavLink>
      <NavLink to={ROUTES.FAVOURITES}>Favourite characters</NavLink>
    </header>
  );
};
