import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export let AuthContext = createContext();
const Context = ({children}) => {
    let [userData, setUserData] = useState();

    useEffect(() => {
        let item = localStorage.getItem("AUTHENTICATION_DATA");
        setUserData(JSON.parse(item));
    }, [])
    console.log(userData);
    let logout =()=>{
      let data = confirm("Are you sure want to logout")
     if(data){
       localStorage.removeItem("AUTHENTICATION_DATA")
       toast.success("You are successfully loggedout")
         setTimeout(()=>{
        window.location.assign("/")
      },2000)
     
     }
    }
    

  return (
    <AuthContext.Provider value={{userData,logout}}>
       {children}
    </AuthContext.Provider>
  )
}

export default Context