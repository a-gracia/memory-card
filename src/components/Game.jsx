import { useEffect, useState } from "react";
import { Card } from "./Card";

export function Game({ increaseScore, resetScore }) {
  let [characters, setCharacters] = useState([]);
  let [clickedChars, setClickedChars] = useState([]);

  useEffect(() => {
    const charsId = [];
    while (charsId.length < 20) {
      const newCharId = getRandomInt(1, 150);

      if (!charsId.includes(newCharId)) {
        charsId.push(newCharId);
      }
    }
    setCharacters(charsId);
  }, []);

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

  return (
    <div className="game-container">
      {shuffleArray(characters).map((char) => (
        <Card key={char} id={char} onClick={handleClickedChars} />
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
