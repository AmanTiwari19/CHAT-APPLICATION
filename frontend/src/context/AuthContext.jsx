import { createContext, useContext, useState } from "react";

export const AuthContext =createContext();
export const useAuthcontext=()=>{
    
    return useContext(AuthContext);
}
export const AuthContextProvider=({children})=>{
    console.log("local storage")

    const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem('chat-user'))||null)
      return <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>
}