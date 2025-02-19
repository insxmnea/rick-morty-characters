import { FC } from "react";
import styles from "./SearchIcon.module.scss";

export const SearchIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="current"
      viewBox="0 0 24 24"
      className={styles.icon}
    >
      <path
        fill="current"
        fillRule="evenodd"
        d="M10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.477l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6.001 6.001 0 0 1 4 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
