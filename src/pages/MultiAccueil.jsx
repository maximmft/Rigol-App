import { useState } from "react";
import NamesInput from "../components/NamesInput";

function MultiAccueil () {
    const [names, setNames] = useState([]);

    const addNames = (inputNames) => {
        setNames([...names, {name: inputNames, completed: false,} ])
    }

    return (
        <>
        <NamesInput addNames={addNames}/>
        {names.map((playerName) => 
        <ul key={playerName.name}>
            <li>{playerName.name}</li>
        </ul>
        )}
        </>
    )
}

export default MultiAccueil;