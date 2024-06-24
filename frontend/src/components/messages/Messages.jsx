import React, { useEffect, useRef } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

import useGetMessages from "../../Hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../Hooks/useListenMessages";

const Messages = () => {
  const {messages,loading}=useGetMessages();
  useListenMessages();
  console.log("messages:", messages);
  console.log(messages[messages.length-1])
  console.log(messages.length)
  const lastMessageref=useRef();
  useEffect(()=>{
    console.log('tra baab')
    setTimeout(()=>{
      lastMessageref.current?.scrollIntoView({behavior:"smooth"});
    },100)
  },[messages])
  
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading&&messages.length>0&&messages.map((message)=>(<div ref={lastMessageref} key={message._id} ><Message message={message}></Message></div>) )}
    {loading&&[...Array(3)].map((_,idx)=><MessageSkeleton key={idx}></MessageSkeleton>)}
    {!loading &&messages.length===0&&(<p className="text-center text-white">Send a message to start conversation </p>)}
    </div>
  );
};

export default Messages;
