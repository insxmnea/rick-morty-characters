import { FC, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { Character, fetchCharacter } from "src/entities/character";
import styles from "./CharacterDetails.module.scss";
import { Loader } from "src/shared/ui/loader";

export const CharacterDetails: FC = () => {
  const [character, setCharacter] = useState<Character | null>();
  const [searchParams] = useSearchParams();
  const { isError, isLoading } = useQuery(
    ["character", { id: searchParams.get("id") || "" }],
    fetchCharacter,
    {
      onSuccess: (fetchedCharacter: Character) => {
        setCharacter(fetchedCharacter);
      },
    }
  );

  if (isLoading) return <Loader />;
  if (isError || character == undefined)
    return <div>Error retrieving character</div>;

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={character.image}
        alt={character.name}
      />

      <div className={styles.info}>
        <span>Name: {character.name}</span>
        <span>Status: {character.status}</span>
        <span>Species: {character.species}</span>
        <span>Type: {character.type}</span>
        <span>Gender: {character.gender}</span>
        <span>Origin: {character.origin.name}</span>
      </div>
    </div>
  );
};
