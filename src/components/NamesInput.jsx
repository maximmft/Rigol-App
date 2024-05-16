import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputName} placeholder="Add Someone..."/>
        <button type='submit'>Add</button>
        </form>
        </>
    )
}

export default NamesInput;