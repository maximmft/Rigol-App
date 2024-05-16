import Header from "../components/Header";
import useSound from 'use-sound'
import first from "../assets/sounds/VOXLaff_Rire (ID 0475)_LS.mp3";

import "./SoloPage.css";

function SoloPage() {
  const [playSound] = useSound(first)
  return (
    <div>
      <Header />
      <button onClick={playSound}> PLAY
        {/* <audio src={first}></audio> */}
      </button>
    </div>
  );
}

export default SoloPage;
