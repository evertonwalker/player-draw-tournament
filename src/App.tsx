import React, { InputHTMLAttributes, useState } from "react";
import "./App.css";

function App() {
  const [players, setPlayers] = useState(Array<{ id: number; name: string }>);
  const [name, setName] = useState("");

  const addPlayer = () => {
    if (name) {
      setPlayers([...players, { id: players.length++, name }]);
      setName("");
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      addPlayer();
    }
  };

  const removePlayer = (id: number) => {
    setPlayers([...players.filter((player) => player.id !== id)]);
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="container-header">
        <h2>Sorteio de jogadores</h2>
      </div>

      {/* Adicionar Jogadores */}

      <div className="players">
        <div className="container-add-players">
          <div className="input-players">
            <label className="label-add-players">
              Digite o nome dos jogadores
            </label>
            <input
              className="input-add-player"
              type="text"
              value={name}
              onKeyDown={handleKeyDown}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="add-player-button" onClick={addPlayer}>
              Adicionar
            </button>
          </div>
          <div className="Players"></div>
        </div>

        <div className="container-players">
          <ul className="list-player-ul">
            {players.map((player) => {
              return (
                <li key={player.id}>
                  {player.name}
                  <button
                    className="remove-player-button"
                    onClick={() => removePlayer(player.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Jogadores sorteados */}


      {/* Times com ROLEs */}
    </div>
  );
}

export default App;
