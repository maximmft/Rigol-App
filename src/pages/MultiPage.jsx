import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useName } from "../contexts/name";
import logo from "../assets/images/buddha 1.svg"
import './MultiPage.css'

function MultiPage() {

  const [changeInterface, setChangeInterface] = useState(true);

  const navigate = useNavigate();
  const { names, setNames } = useName();
  const [namesIndex, setNamesIndex] = useState(0);

  const handleReturn = () => {
    navigate("/");
};

  const handleCount =() => {
    setChangeInterface(!changeInterface)
    if(changeInterface === true){
    setNamesIndex(namesIndex + 1)
    if (namesIndex >= names.length-1) {
      setNamesIndex(0)
    } 
    }
  }
  
  return (
    <section className="section-multi">
      <img src={logo} className="logo-multi" onClick={handleReturn}/>
      {changeInterface === true ? <div className="play">
        <h2 className="h2-multi" >{names[namesIndex].name}</h2>
        <h2 className="h2-multi">Rigole un coup !</h2>
      </div> : <div className="play">
        <h2 className="h2-multi">A vos rires !</h2>
      </div> }
      <button className="button-multi" onClick={handleCount}>Suivant</button>
    </section>
  );
}

export default MultiPage;