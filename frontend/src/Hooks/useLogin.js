import React from 'react'
import { useAuthcontext } from '../context/AuthContext';
import { useState } from 'react';
import toast from 'react-hot-toast';


const useLogin = () => {
    const [loading,setLoading]=useState(false);
   const {setAuthUser}=useAuthcontext();
   
    const login=async(username,password)=>{
        // console.log(password)
       if( handleInputErrors({username,password}))
        {
            return;
        }
        setLoading(true);
        try{
       const res=await fetch('/api/auth/login',{
        method:"POST",
        headers: { "Content-Type": "application/json" },
       
        body:JSON.stringify({username,password})

       })
        const data=await res.json()
        if(data.error)
            {
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data);
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
  return {loading,login};
}

export default useLogin

function handleInputErrors({username,password}){
    // console.log("reached2")
    // console.log(username,gender,password,confirmPassword,fullname)
    if(!username||!password)
        {
            toast.error('please fill in all fields')
            return true;
        }
       
      
        // console.log("allset")
        return false;
}