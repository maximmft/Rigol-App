import Header from "../components/Header";
import useSound from 'use-sound'
import first from "../assets/sounds/VOXLaff_Rire (ID 0475)_LS.mp3";

import "./SoloPage.css"
import { FaCirclePlay } from "react-icons/fa6";

function SoloPage() {
  const [playSound] = useSound(first)
  return (
    <div>
      <Header />
      <section className="display-solo-page">
      <div className="play-solo">
       <FaCirclePlay className="btn-solo-sound"  onClick={playSound}/>
      </div>
      </section>
    </div>
  );
}

export default SoloPage;
