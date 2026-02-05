import { TopBar } from "./TopBar";
import { Game } from "./Game";
import { useState } from "react";

function App() {
  let [currentScore, setCurrentScore] = useState(0);
  let [maxScore, setMaxScore] = useState(0);

  currentScore > maxScore ? setMaxScore(currentScore) : null;

  const handleCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  return (
    <>
      <TopBar currentScore={currentScore} maxScore={maxScore} />
    </>
  );
}

export default App;
