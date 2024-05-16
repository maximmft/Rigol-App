import Header from "../components/Header";
import { useState } from "react";
import useSound from "use-sound";
import data from "../data";
import "./SoloPage.css";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function SoloPage() {
  const [changeButton, setChangeButton] = useState(false);
  const [soundIndex, setSoundIndex] = useState(0);

  const [playSound] = useSound(data[soundIndex].sound);
  const navigate = useNavigate();

  console.log(soundIndex);

  const handleChange = () => {
    setChangeButton(true);
    setSoundIndex(soundIndex + 1);
    playSound();
  };

  if (soundIndex >= data.length -1){
   navigate("/finish")
  }

  return (
    <div>
      <section className="display-solo-page">
        <div className="play-solo">
          {changeButton === false ? (
            <FaCirclePlay onClick={handleChange} className="btn-solo-sound" />
          ) : (
            <h2 className="btn-change-solo">A toi de rire !</h2>
          )}
        </div>
        <button onClick={handleChange} className="btn-laught">
          Ris encore
        </button>
       
      </section>
    </div>
  );
}

export default SoloPage;
