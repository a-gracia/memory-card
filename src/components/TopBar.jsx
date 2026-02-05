export function TopBar({ currentScore, maxScore }) {
  return (
    <>
      <p>Memory Game</p>
      <div>
        <p>Current score: {currentScore}</p>
        <p>Max score: {maxScore} </p>
      </div>
    </>
  );
}
