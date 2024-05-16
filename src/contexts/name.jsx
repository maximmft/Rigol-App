import {createContext, useContext, useState} from "react";

const NameContext = createContext();

export function NameProvider({
    children,
}){
    const [names, setNames] = useState([])

    return(
        <NameContext.Provider value = {{names,setNames}}>
            {children}
        </NameContext.Provider>
    );
}

export const useName = () => useContext(NameContext)