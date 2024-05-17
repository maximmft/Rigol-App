import { useState } from "react"
import { useName } from "../contexts/name";
import './MultiPage.css'

function MultiPage() {

  const [changeInterface, setChangeInterface] = useState(true);

  
  const { names } = useName();
  const [namesIndex, setNamesIndex] = useState(0);

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


