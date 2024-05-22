import { useState } from "react";
import useSound from "use-sound";
import data from "../data";
import "./SoloPage.css";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import SoloInstruction from "./SoloInstruction";

function SoloPage() {
  const [changeButton, setChangeButton] = useState(false);
  const [soundIndex, setSoundIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [playSound] = useSound(data[soundIndex].sound);
  let audio = new Audio(data[soundIndex].sound);
  const start = () => {
    audio.play()
  }

  const navigate = useNavigate();

  const handleChange = () => {
    setChangeButton(true);
    setSoundIndex(soundIndex + 1);
    start();
  };
  if (soundIndex >= data.length - 1) {
    navigate("/finish");
  }
  const handleClick = () => {
    setMenuOpen(!menuOpen);
    handleInstruction();
  };

  const handleInstruction = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <button onClick={handleClick} className="menu-instruction">
        Instructions
      </button>
      <div className="text-instruction">
        {menuOpen && <SoloInstruction setMenuOpen={setMenuOpen} />}
      </div>
      <div>
        <section className="display-solo-page">
          <div className="play-solo">
            {changeButton === false ? (
              <FaCirclePlay onClick={handleChange} className="btn-solo-sound" />
            ) : (
              <h2 className="btn-change-solo">A toi de rire !</h2>
            )}
          </div>
          {changeButton === true ? (
            <button onClick={handleChange} className="btn-laught">
              Ris encore
            </button>
          ) : (
            <h2 className="hide-text">Prêt à rire ?</h2>
          )}
        </section>
      </div>
    </>
  );
}

export default SoloPage;
