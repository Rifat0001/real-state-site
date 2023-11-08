import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Inbox() {
    const params = useParams();
    const id = params.id;
    const [messages, setMessages] = useState([]);
    const [mi,setMi] = useState("")
      useEffect(() => {
        const fetchData = async () => {
          try {
            const config = {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
              }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/inbox/${id}`, config, { withCredentials: true });
            const newMessages = res.data.messages;

            const newMessagesToAdd = newMessages.filter((newMessage) => !messages.some((message) => message.id == newMessage.id));

            if (newMessagesToAdd.length > 0) {
                setMessages([...messages, ...newMessagesToAdd]);
                console.log("Added new messages:", newMessagesToAdd);
            } else {
                console.log("No new messages to add.");
            }
            } catch (error) {
            console.log(error);
            }
        };
      
        fetchData(); // Call the function when the component mounts
        const interval = setInterval(fetchData, 2000); // Fetch data every 2 seconds
      
        return () => {
          // Clear the interval when the component unmounts
          clearInterval(interval);
        };
      }, [messages]);
      
    const handleValue = (e)=>{
        setMi(e.target.value)
    }
    const sendMessage = async()=>{
        try {
            const config ={
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`JWT ${localStorage.getItem('access')}`,
                }
            };
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/inbox/${id}/`,{
                "message":mi
            },config,{withCredentials:true});
            setMi("")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <div>
            {messages&& messages.map((e, i)=>{
                return (
                    <div  key={i}>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" key={i}>[{e.id}]{e.sender}:{e.message}</button>
                    </div>
                )
            })}
        </div>
        <textarea onChange={e=>handleValue(e)} className="textarea textarea-warning" placeholder="message"></textarea>
        <button className="btn btn-active btn-primary" onClick={sendMessage}>Send</button>
        </>
    );
}

export default Inbox;