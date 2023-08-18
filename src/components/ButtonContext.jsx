import { useState, createContext } from "react";

export const ButtonContext = createContext()

export const ButtonContextProvider = ({children}) => {
    const [active, setActive] = useState(0)
    return (
        <ButtonContext.Provider value={{active, setActive}}>
            {children}
        </ButtonContext.Provider>
    )
}