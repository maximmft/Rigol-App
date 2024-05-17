import { useNavigate } from "react-router-dom";
import logo from "../assets/images/buddha 1.svg";
import useSound from "use-sound";
import './Instructions.css'
import a_vos_rire from "../assets/sounds/A-vos-rire.mp3";

function Instructions() {

    const navigate = useNavigate();

    const [playSound] = useSound(a_vos_rire);

    const handleReturn = () => {
        navigate("/");
    };

  return (
    <section className="section-instruction">
      <h2 className="h2-instructions">Comment pratiquer?</h2>
      <h3 className="h3-instructions" id="solo">Solo</h3>
      <p className="paragraph-instructions">
        Trouvez un espace calme où vous pouvez vous détendre sans être dérangé.
        <br></br>
        <br></br>
        Asseyez-vous ou tenez-vous debout dans une posture confortable, le dos
        droit et les épaules détendues.
        <br></br>
        <br></br>Appuyez sur le bouton de lecture pour démarrer l'audio du rire.
        Laissez-vous aller et écoutez le son du rire avec attention.
        <br></br>
        <br></br>Une fois que l'audio du rire commence à jouer, imitez-le du
        mieux que vous le pouvez. Laissez votre rire être authentique et
        spontané, sans vous inquiéter de son apparence ou de sa sonorité.
        <br></br>
        <br></br>
        Laissez-vous emporter par le rire contagieux. Sentez la joie et la
        légèreté envahir votre être. N'hésitez pas à rire de vous-même et à vous
        laisser aller à l'amusement.
        <br></br>
        <br></br>
        Après avoir ri pendant quelques instants, l'audio du rire prendra fin.
        Prenez une courte pause pour respirer, puis préparez-vous à répéter le
        processus. Continuez à suivre les instructions et à rire avec abandon.
      </p>
      <h3 className="h3-instructions" id="many">A plusieurs</h3>
      <p className="paragraph-instructions">
        L'application choisit aléatoirement une personne parmi les participants
        pour commencer.
        <br></br>
        <br></br>La personne désignée doit faire le rire qu’il veut en
        appuyant sur le bouton de l'application. 
        <br></br>
        <br></br>Une fois que le rire initial
        est déclenché, les autres participants, qui doivent imiter le rire à
        leur tour. 
        <br></br>
        <br></br>Après que tout le groupe ait ri ensemble, l'application
        choisit automatiquement une nouvelle personne pour déclencher son rire,
        et le processus se répète. 
        <br></br>
        <br></br>Les participants peuvent varier les types de
        rires à chaque tour pour ajouter de la diversité et de l'amusement. 
        <br></br>
        <br></br>A la
        fin de la séance, prenez le temps de vous remercier pour ce moment
        ensemble en vous regardant droit dans les yeux
      </p>
      <p className="sample-sound">Exemple :</p>
      <audio controls src={playSound}></audio>
      <button className="button-instructions" onClick={handleReturn}>Retour</button>
    </section>
  );
}

export default Instructions;
