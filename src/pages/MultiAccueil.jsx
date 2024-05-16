import { useState } from "react";
import NamesInput from "../components/NamesInput";
import "../pages/multiaccueil.css";

function MultiAccueil() {
  const [names, setNames] = useState([]);

  const addNames = (inputNames) => {
    setNames([...names, { name: inputNames, completed: false }]);
  };

  return (
    <>
      <div className="input">
        <NamesInput addNames={addNames} />
      </div>
      <div className="multi-home">
        <ul className="names-list">
          {names.map((playerName) => (
            <li key={playerName.name} className="li-name" >{playerName.name}</li>
          ))}
        </ul>
      </div>
      <div className="btn-container">
        <button className="btn">Riez !</button>
      </div>
    </>
  );
}

export default MultiAccueil;
