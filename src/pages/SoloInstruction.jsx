import "./GameInstruction.css";
import "./SoloPage.css";

function SoloInstruction({ setMenuOpen }) {
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
        Trouvez un espace calme où vous pouvez vous détendre sans être dérangé.
        <br></br>
        <br></br>
        Asseyez-vous ou tenez-vous debout dans une posture confortable, le dos
        droit et les épaules détendues.
        <br></br>
        <br></br>
        <b style={{ fontSize: "1.1rem" }}>
          Appuyez sur le bouton de lecture pour démarrer l'audio du rire.{" "}
        </b>
        Laissez-vous aller et écoutez le son du rire avec attention.
        <br></br>
        <br></br>Une fois l'audio du rire terminé,{" "}
        <b style={{ fontSize: "1.1rem" }}>
          imitez-le du mieux que vous le pouvez.
        </b>{" "}
        Laissez votre rire être authentique et spontané, sans vous inquiéter de
        son apparence ou de sa sonorité.
        <br></br>
        <br></br>
        <b style={{ fontSize: "1.1rem" }}>
          Laissez-vous emporter par le rire contagieux.
        </b>{" "}
        Sentez la joie et la légèreté envahir votre être. N'hésitez pas à rire
        de vous-même et à vous laisser aller à l'amusement.
        <br></br>
        <br></br>
        Après avoir ri pendant quelques instants, prenez une courte pause pour
        respirer, puis préparez-vous à répéter le processus.{" "}
        <b style={{ fontSize: "1.1rem" }}>
          Continuez à suivre les instructions et à rire avec abandon.
        </b>
      </p>
    </div>
  );
}

export default SoloInstruction;
