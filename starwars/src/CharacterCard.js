import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterContent from "./CharacterContent";

const CharacterCard = () => {
  const [people, setPeople] = useState([]);
  const [error, setErrorState] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/?format=json")
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(error => {
        setErrorState("Error 404");
      });
  }, []);

  return (
    <div className="characters">
      {error && <p>{error}</p>}
      {people.map(character => {
        return (
          <CharacterContent
            key={character}
            name={character.name}
            height={character.height}
            mass={character.mass}
            hairColor={character.hair_color}
            skinColor={character.skin_color}
          />
        );
      })}
    </div>
  );
};
export default CharacterCard;
