import { FC, useState } from "react";
import styles from "./HomePage.module.scss";
import {
  Character,
  fetchCharacters,
  FetchedCharactersData,
  Info,
} from "src/entities/character";
import { useQuery } from "react-query";
import { CharacterCard } from "src/widgets/character-card/ui/CharacterCard";
import { Loader } from "src/shared/ui/loader";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "src/widgets/search-bar";
import { Pagination } from "src/features/pagination";

export const HomePage: FC = () => {
  const [searchParams] = useSearchParams();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>({
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  });

  const { isError, isLoading } = useQuery(
    [
      "characters",
      {
        name: searchParams.get("name") || "",
        page: searchParams.get("page") || "1",
      },
    ],
    fetchCharacters,
    {
      onSuccess: (fetchedCharacters: FetchedCharactersData) => {
        setCharacters(fetchedCharacters.results);
        setInfo(fetchedCharacters.info);
      },
    }
  );

  return (
    <div>
      <SearchBar />
      {isLoading && <Loader />}
      {isError && <span>Error retrieving characters</span>}
      {!isLoading && !isError && (
        <>
          <ul className={styles.charactersCards}>
            {characters.map((character) => (
              <li className={styles.characterCard} key={character.id}>
                <CharacterCard {...character} />
              </li>
            ))}
          </ul>

          <div className={styles.pagination}>
            <Pagination totalPageCount={info.pages} />
          </div>
        </>
      )}
    </div>
  );
};
