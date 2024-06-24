import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthcontext } from '../context/AuthContext';

const useSignUp = () => {
    const [loading,setloading]=useState(false);
    const {authUser,setAuthUser}=useAuthcontext();
    const signup=async({fullname,username,password,confirmPassword,gender})=>{
        // console.log(confirmPassword)
        // console.log('reached')
        const success=handleInputErrors({fullname,username,password,confirmPassword,gender})
        if(!success)return;
        const confirmpassword=confirmPassword/// need to do it as it consistency should be maintained in backend frontend
        try{
            // console.log('chala')
          const res=await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullname,username,password,confirmpassword,gender})
          })

          const data=await res.json();
          if(data.error)
            {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data);

        //   console.log(data);
        // localstorage context
        }
        catch(error)
        {
            toast.error(error.message)
        }
        finally{
            setloading(false);
        }
    }



  return {loading,signup}
}

export default useSignUp

function handleInputErrors({fullname,username,password,confirmPassword,gender}){
    // console.log("reached2")
    // console.log(username,gender,password,confirmPassword,fullname)
    if(!fullname||!username||!password||!confirmPassword||!gender)
        {
            toast.error('please fill in all fields')
            return false;
        }
        if(password!=confirmPassword)
            {
                toast.error('password do not match')
                return false
            }
       if(password.length<6)
        {
            toast.error('passward must be at least 6 character');
            return false
        }
        // console.log("allset")
        return true;
}