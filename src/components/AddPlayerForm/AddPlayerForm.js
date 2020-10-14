import React, { useState } from "react";

function AddPlayerForm({ addPlayer }) {
  const [name, setName] = useState("");
  console.log("LOG THE NAME", name);

  const onChangeInputField = (event) => {
    console.log("new input.value", event.target.value);
    setName(event.target.value);
  };

  return (
    <div className="AddPlayerForm">
      <div>
        New player:{" "}
        <input onChange={onChangeInputField} value={name} type="text" placeholder="Name" />
        <p>Characters: {name.length}</p>
        <button onClick={() => addPlayer(name)}>Add</button>
      </div>
    </div>
  );
}

export default AddPlayerForm;
