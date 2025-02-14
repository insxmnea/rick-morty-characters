import { FC } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <NavLink to={"/rick-morty-characters/"}>Home</NavLink>
      <NavLink to={"/rick-morty-characters/favourites"}>
        Favourite characters
      </NavLink>
    </header>
  );
};
