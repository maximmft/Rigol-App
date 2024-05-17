import { useNavigate } from "react-router-dom";
import { useName } from "../contexts/name";
import NamesInput from "../components/NamesInput";
import "../pages/multiaccueil.css";

function MultiAccueil() {
  const { names, setNames } = useName([]);

  const addNames = (inputNames) => {
    setNames([...names, { name: inputNames }]);
  };

  const navigate = useNavigate();

  const handleNames = () => {
    navigate("/multipage");
  };

  return (
    <div className="display-multi-accueil">
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
