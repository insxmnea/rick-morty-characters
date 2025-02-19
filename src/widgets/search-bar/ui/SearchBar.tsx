import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import styles from "./SearchBar.module.scss";
import { useSearchParams } from "react-router-dom";
import { SearchIcon } from "src/shared/assets/icons";

export const SearchBar: FC = () => {
  const [query, setQuery] = useState("");
  const [, setSearchParams] = useSearchParams();

  const onSearch = async (search: string = "") => {
    setSearchParams((params) => {
      params.set("name", search);
      params.set("page", "1");
      return params;
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
        id={"search-bar"}
        onChange={handleInputChange}
        value={query}
        onKeyDown={(event) => handleKeyDown(event)}
      />
      <button className={styles.button} onClick={() => onSearch(query)}>
        <SearchIcon />
      </button>
    </div>
  );
};
