import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useName } from "../contexts/name";
import NamesInput from "../components/NamesInput";


function MultiAccueil () {
    const {names, setNames} = useName();
    console.log(names);
    console.log(setNames);

    const addNames = (inputNames) => {
        setNames([...names, {name: inputNames, completed: false,} ])
    }

    const navigate = useNavigate();

    const handleNames = () => {
        navigate("/multipage")
    }


    return (
        <>
        <NamesInput addNames={addNames}/>
        {names.map((playerName) => 
        <ul key={playerName.name}>
            <li>{playerName.name}</li>
        </ul>
        )}
        <button onClick={handleNames} >Riez</button>
        </>
    )
}

export default MultiAccueil;