import { useNavigate } from "react-router-dom";
import { useName } from "../contexts/name";
import NamesInput from "../components/NamesInput";
import "../pages/multiaccueil.css";
import MultiInstruction from "./MultiInstruction";
import { useState } from "react";

function MultiAccueil() {
  const { names, setNames } = useName([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const addNames = (inputNames) => {
    setNames([...names, { name: inputNames }]);
  };

  const navigate = useNavigate();

  const handleNames = () => {
    navigate("/multipage");
  };

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    handleInstruction();
  };

  const handleInstruction = () => {
    setMenuOpen(true);
  };

  return (
    <div className="display-multi-accueil">
      <button onClick={handleClick} className="menu-instruction">
        Instructions
      </button>
      <div className="text-instruction">
        {menuOpen && <MultiInstruction setMenuOpen={setMenuOpen} />}
      </div>
      <div className="input">
        <NamesInput addNames={addNames} />
      </div>
      <div className="multi-home">
        <ul className="names-list">
          {names.map((playerName) => (
            <li key={playerName.name} className="li-name">
              {playerName.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={handleNames}
          disabled={names.length === 0}
        >
          Riez !
        </button>
      </div>
    </div>
  );
}

export default MultiAccueil;
