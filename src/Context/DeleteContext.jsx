import { createContext, useState } from "react"


export const DeleteContext=createContext()


 

export const DeleteContextProvider=({children})=>{
    const [deleted,setDeleted]=useState(false)


    return (
        <DeleteContext.Provider value={{deleted,setDeleted}} >
            {children}
        </DeleteContext.Provider>
    )

}