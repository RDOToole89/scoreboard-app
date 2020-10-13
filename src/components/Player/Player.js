import React from "react";

function Player({ name, score }) {
  return (
    <li className="Player">
      <p>
        {name}
        <span> (score: {score})</span>
      </p>
    </li>
  );
}

export default Player;
