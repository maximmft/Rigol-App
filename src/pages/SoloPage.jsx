import Header from "../components/Header";
import { useState } from "react";
import useSound from "use-sound";
import first from "../assets/sounds/VOXLaff_Rire (ID 0475)_LS.mp3";

import "./SoloPage.css";
import { FaCirclePlay } from "react-icons/fa6";

function SoloPage() {
  const [changeButton, setChangeButton] = useState(false);

  const [playSound] = useSound(first);

  const handleChange = () => {
    setChangeButton(!changeButton && playSound);
  };

  return (
    <div>
      <Header />
      <section className="display-solo-page">
        <div className="play-solo">
          {changeButton === false ? (
            <FaCirclePlay onClick={handleChange} className="btn-solo-sound" />
          ) : (
            <h2 className='btn-change-solo'>A toi de rire !</h2>
          )}
        </div>
      </section>
    </div>
  );
}

export default SoloPage;
