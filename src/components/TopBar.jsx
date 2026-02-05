export function TopBar({ currentScore, maxScore }) {
  return (
    <div className="topbar">
      <h1>Memory Game</h1>

      <p>Current score: {currentScore}</p>
      <p>Max score: {maxScore} </p>
    </div>
  );
}
