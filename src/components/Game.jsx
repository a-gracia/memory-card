import { useEffect, useState } from "react";
import { Card } from "./Card";

export function Game({ increaseScore, resetScore }) {
  let [characters, setCharacters] = useState({});
  let [clickedChars, setClickedChars] = useState([]);

  const handleClickedChars = (e) => {
    let id = e.currentTarget.id;

    if (!clickedChars.includes(id)) {
      increaseScore();
      setClickedChars([...clickedChars, id]);
    } else {
      resetScore();
      setClickedChars([]);
    }
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12`)
      .then((response) => response.json())
      .then((json) => setCharacters(json.results));
  }, []);

  let DOMChars = Object.entries(characters);

  return (
    <div>
      {shuffleArray(DOMChars).map((char) => (
        <Card key={char[1].name} {...char[1]} onClick={handleClickedChars} />
      ))}
    </div>
  );
}

const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
