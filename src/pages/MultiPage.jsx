import { useState } from "react"
import logo from "../assets/images/buddha 1.svg"
import './MultiPage.css'

function MultiPage() {

  const [changeInterface, setChangeInterface] = useState(true);

  const handleChange = () =>
    setChangeInterface(!changeInterface)
  console.log(changeInterface);
  
  return (
    <section className="section-multi">
      <img src={logo} className="logo-multi"/>
      {changeInterface === true ? <div className="play">
        <h2 className="h2-multi">Yann</h2>
        <h2 className="h2-multi">Rigole un coup !</h2>
      </div> : <div className="play">
        <h2 className="h2-multi">A vos rires !</h2>
      </div> }
      <button className="button-multi" onClick={handleChange}>Suivant</button>
    </section>
  );
}

export default MultiPage;

