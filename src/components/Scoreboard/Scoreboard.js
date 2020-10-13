import React, { useState } from "react";
import Player from "../Player/Player";

// Sorting functions

// Sort by score
const compareScore = (playerA, playerB) => {
  return playerB.score - playerA.score;
};

// Sort by name
const compareName = (playerA, playerB) => {
  return playerA.name.localeCompare(playerB.name);
};

function ScoreBoard() {
  // Scoreboard useState takes in a hardcoded player array
  // player = inintial state // setPlayer is a function that can change the initial state
  const [players, setPlayer] = useState([
    { id: 1, name: "Violeta", score: 8 },
    { id: 2, name: "Rein", score: 5 },
    { id: 3, name: "Jeroen", score: 10 },
    { id: 4, name: "Lisa", score: 0 },
  ]);

  const incrementScore = (id) => {
    console.log("score increment fired");
    const newPlayersArray = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data

          ...player,
          // and then overriding the score property to be incremented
          score: player.score + 1,
        };
      } else {
        // else, just keep them
        return player;
      }
    });
    setPlayer(newPlayersArray);
  };

  const resetScore = (id) => {
    console.log("reset score fired");
    const newPlayersArray = players.map((player) => {
      console.log("WHAT IS PLAYER:", player);
      if (player.id === id) {
        return {
          ...player,
          score: player.score - player.score,
        };
      } else {
        return player;
      }
    });
    setPlayer(newPlayersArray);
  };

  // Sorting useState the initial state is "score"
  const [sortBy, setSortBy] = useState("score");

  // changeSorting changes changes the useState to the value the user selects in the list
  const changeSorting = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };

  // Sort by score - spread the array and sort based on the compareScore function
  const playersSortedByScore = [...players].sort(compareScore);

  // Sort by name - spread the array and sort based on the compareName function
  const playersSortedByName = [...players].sort(compareName);
  console.log("NAMESORT", playersSortedByName);

  // changeSort holds the value of the initial player state sorted by the selected useState
  const changeSort = sortBy === "score" ? playersSortedByScore : playersSortedByName;

  // Map players to the scoreboard based on the changeSort variable
  const playerMap = changeSort.map((player) => {
    return (
      <Player
        key={player.id}
        id={player.id}
        name={player.name}
        score={player.score}
        incrementScore={incrementScore}
        resetScore={resetScore}
      />
    );
  });

  return (
    <div className="ScoreBoard">
      <select onChange={changeSorting} value={sortBy}>
        <option value="score">Sort by score</option>
        <option value="name">Sort by name</option>
      </select>
      <p>Player's Scores:</p>
      <ul>{playerMap}</ul>
    </div>
  );
}

export default ScoreBoard;
