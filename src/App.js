import React from "react";
import Title from "./components/Title/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import AddPlayerForm from "./components/AddPlayerForm/AddPlayerForm";

function App() {
  return (
    <main>
      <Title content="ScoreBoard App" />
      <Scoreboard />
    </main>
  );
}

export default App;
