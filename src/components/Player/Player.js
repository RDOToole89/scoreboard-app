import React from "react";

function Player({ name, score, id, incrementScore, resetScore }) {
  const onClickIncrement = () => {
    console.log(`onClickIncrement fired! playerId: ${id}`);
    incrementScore(id);
  };

  const onClickResetScore = () => {
    console.log(`resetScore fired! ${score}`);
    resetScore(id);
  };

  return (
    <li className="Player">
      <p>
        {name}
        <span> (score: {score})</span>
        <span>
          <button onClick={onClickIncrement}>increment +</button>
          <button onClick={onClickResetScore}>reset</button>
        </span>
      </p>
    </li>
  );
}

export default Player;
