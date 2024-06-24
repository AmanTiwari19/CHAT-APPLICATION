import React from "react";
import { useAuthcontext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";


const Message = ({message}) => {
  // console.log('a');
  console.log(message.message);
  // console.log(message.newMessage.message)
  // console.log('b')
  const {authUser}=useAuthcontext();
 const {selectedConversation}= useConversation()
 console.log('abe')

 console.log(message.senderId);
 console.log('abs')
 console.log(authUser._id)
 console.log('abk')

 const fromMe=message?.senderId===authUser._id;
 const formattedTime= extractTime(message.createdAt);
 const chatClassName=fromMe?'chat-end':'chat-start';
 const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
 const bubbleBgColor=fromMe?'bg-blue-500':""

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="buble component"
            src={
              profilePic
            }
          ></img>
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBgColor}`}>{message?.message}</div>
      <div className=" chat-footer opacity-50  text-white text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
