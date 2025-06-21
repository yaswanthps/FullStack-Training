import { createContext } from "react";
export const UserContext = createContext();
export const UserProvider=({children})=>{
    const name=["Yas","Sanjay","Meha"];
    return(
        <div><UserContext.Provider value={name}>
            {children}
        </UserContext.Provider></div>
    )
}
