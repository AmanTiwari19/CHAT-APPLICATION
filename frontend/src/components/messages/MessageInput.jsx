import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../Hooks/useSendMessage';

const MessageInput = () => {
   const [message,setMessage]=useState("");
   const {loading,sendMessage}=useSendMessage();

   const handleSumbit=async(e)=>{
      console.log(message)
      e.preventDefault();
      if(!message) return ;
      await sendMessage(message);
      setMessage("")
   }
  return (
     <form className= 'px-4 my-3' onSubmit={handleSumbit}>
        <div className='w-full relative'>
            <input type="text"  value={message} onChange={(e)=>setMessage(e.target.value)} className='border text-sm   rounded-lg block w-full p-2.5 bg-gray-500 border-gray-800 text-white' placeholder='send a message'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' >
               {loading?<div className='loading   loading-spinner'></div>:<BsSend></BsSend>}
      
            </button>
        </div>
     </form>
  )
}

export default MessageInput;
