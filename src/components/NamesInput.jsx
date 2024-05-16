import { useState } from "react";
import "../components/namesinput.css"

function NamesInput ({addNames}) {

    const [inputName, setInputName] = useState("")

    const handleSubmit = (e) => {
        addNames(inputName)
        e.preventDefault();

        setInputName("")
    }
 
    const handleInput = (e) => {
        setInputName(e.target.value)
    }

    console.log(inputName)
    
    return (
        <>
        <form onSubmit={handleSubmit} className="input-name">
        <input type="text" onChange={handleInput} value={inputName} placeholder="Add Someone..."/>
        <button type='submit' className="submit-btn">Add</button>
        </form>
        </>
    )
}

export default NamesInput;