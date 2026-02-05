import { useEffect, useState } from "react";
import { Card } from "./Card";

export function Game() {
  let [characters, setCharacters] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`)
      .then((response) => response.json())
      .then((json) => setCharacters(json.results));
  }, []);

  let DOMChars = Object.entries(characters);

  return (
    <div>
      {DOMChars.map((char) => (
        <Card key={char[1].name} {...char[1]} />
      ))}
    </div>
  );
}
