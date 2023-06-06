import { createContext, useState, useEffect    } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { signOutUser } from "../utils/firebase/firebase.utils";


export const UserContext=createContext({
    currentuser:null,
    setcurrentuser:()=>null,
});


export const UserProvider=({children})=>{
    const [currentuser,setcurrentuser]=useState(null);
    const value={currentuser,setcurrentuser};

    signOutUser();

    useEffect(()=>{
        const unsubscribe=onAuthStateChangedListener((user)=>{
            setcurrentuser(user);
        
        })

        return unsubscribe
    },[])



    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}


