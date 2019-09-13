import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterContent from "./CharacterContent";

const CharacterCard = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log("Error!!!!");
      });
  }, []);

  return (
    <div className="characters">
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
