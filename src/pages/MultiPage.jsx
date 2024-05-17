import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useName } from "../contexts/name";
import logo from "../assets/images/buddha 1.svg";
import "./MultiPage.css";

function MultiPage() {
  const [changeInterface, setChangeInterface] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();
  const { names, setNames } = useName();
  const [namesIndex, setNamesIndex] = useState(0);

  const handleCount = () => {
    setChangeInterface(!changeInterface);
    if (changeInterface === true) {
      setNamesIndex(namesIndex + 1);
      if (namesIndex >= names.length - 1) {
        setNamesIndex(0);
      }
    }
  };

  return (
    <>
      <button onClick={handleClick} className="menu-instruction">
        Instructions
      </button>
      <div className="text-instruction">
        {menuOpen && (
          <p className="paragraph-instructions">
            L'application choisit aléatoirement une personne parmi les
            participants pour commencer.
            <br></br>
            <br></br><b style={{fontSize:'1.1rem'}}>La personne désignée doit faire le rire qu’il veut</b> en
            appuyant sur le bouton de l'application.
            <br></br>
            <br></br>Une fois que le rire initial est déclenché, <b style={{fontSize:'1.1rem'}}>les autres
            participants doivent imiter le rire à leur tour.</b>
            <br></br>
            <br></br>Après que tout le groupe ait ri ensemble, l'application
            choisit automatiquement une nouvelle personne pour déclencher son
            rire, et le processus se répète.
            <br></br>
            <br></br>Les participants peuvent varier les types de rires à chaque
            tour pour ajouter de la diversité et de l'amusement.
            <br></br>
            <br></br>A la fin de la séance, <b style={{fontSize:'1.1rem'}}>prenez le temps de vous remercier </b>
            pour ce moment ensemble en vous regardant droit dans les yeux
          </p>
        )}
      </div>
      <section className="section-multi">
        {changeInterface === true ? (
          <div className="play">
            <h2 className="h2-multi">{names[namesIndex].name}</h2>
            <h2 className="h2-multi">Rigole un coup !</h2>
          </div>
        ) : (
          <div className="play">
            <h2 className="h2-multi">A vos rires !</h2>
          </div>
        )}
        <button className="button-multi" onClick={handleCount}>
          Suivant
        </button>
      </section>
    </>
  );
}

export default MultiPage;
