import React from "react";
import "./Player.scss";

function Player({ name, score, id, incrementScore, resetScore }) {
  const onClickIncrement = () => {
    console.log(`onClickIncrement fired! playerId: ${id}`);
    incrementScore(id);
  };

  return (
    <li className="Player">
      <div className="percentage_coloring" style={{ width: score + "%" }} />

      <p>
        {name} (score: {score})<button onClick={onClickIncrement}>increment +</button>
      </p>
    </li>
  );
}

export default Player;
