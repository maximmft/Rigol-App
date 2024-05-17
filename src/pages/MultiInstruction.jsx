import "./GameInstruction.css";
import a_vos_rire from "../assets/sounds/A-vos-rire.mp3";

function MultiInstruction({ setMenuOpen }) {
  const handleCloseInstruction = () => {
    setMenuOpen(false);
  };

  return (
    <div className="section-instruction-solo">
      <button
        type="button"
        onClick={handleCloseInstruction}
        className="btn-close"
      >
        X
      </button>
      <p className="paragraph-instructions-mobile">
        L'application choisit aléatoirement une personne parmi les participants
        pour commencer.
        <br></br>
        <br></br>
        <b style={{ fontSize: "1.1rem" }}>
          La personne désignée doit faire le rire qu’il veut
        </b>{" "}
        en appuyant sur le bouton de l'application.
        <br></br>
        <br></br>Une fois que le rire initial est déclenché,{" "}
        <b style={{ fontSize: "1.1rem" }}>
          les autres participants doivent imiter le rire à leur tour.
        </b>
        <br></br>
        <br></br>Après que tout le groupe ait ri ensemble, l'application choisit
        automatiquement une nouvelle personne pour déclencher son rire, et le
        processus se répète.
        <br></br>
        <br></br>Les participants peuvent varier les types de rires à chaque
        tour pour ajouter de la diversité et de l'amusement.
        <br></br>
        <br></br>A la fin de la séance,{" "}
        <b style={{ fontSize: "1.1rem" }}>prenez le temps de vous remercier </b>
        pour ce moment ensemble en vous regardant droit dans les yeux
      </p>
      <audio controls src={a_vos_rire}></audio>
    </div>
  );
}

export default MultiInstruction;
