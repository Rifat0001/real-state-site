import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Inbox() {
    const params = useParams();
    const id = params.id;
    const [messages, setMessages] = useState([]);
    const [mi,setMi] = useState("")
    // Function to fetch initial conversation and messages
    // const fetchInitial = async () => {
    //     try {
    //       const config = {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `JWT ${localStorage.getItem('access')}`,
    //         }
    //       };
    //       const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/inbox/${id}`, config, { withCredentials: true });
    //       const newMessages = res.data.messages;
    //       console.log("Received messages from API:", newMessages);
    //       setMessages(newMessages);
    //       console.log("Messages length after setting:", newMessages.length);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
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
                // Update the state by concatenating the new messages
                setMessages([...messages, ...newMessagesToAdd]);
                console.log("Added new messages:", newMessagesToAdd);
            } else {
                console.log("No new messages to add.");
            }
            } catch (error) {
            console.log(error);
            }

            
        //     // Check if the new messages list is longer than the old one
        //     if (newMessages.length > messages.length) {
        //       console.log("Updating messages:", newMessages);
        //       setMessages(newMessages);
        //     } else {
        //       console.log("No need to update messages.");
        //     }
        //   } catch (error) {
        //     console.log(error);
        //   }
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
    // Handle sending new messages and updating the UI
    const sendMessage = async()=>{
        try {
            const config ={
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/inbox/${id}/`,{
                "message":mi
            },config,{withCredentials:true});
            setMi("")
            // setMessages((prevList) => [...prevList, res.data.message]);
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


// useEffect(() => {
//     // Fetch initial conversation and messages when the component mounts
//     fetchInitial();
//     const interval = setInterval(async() => {
//         try {
//             const config ={
//                 headers:{
//                     'Content-Type':'application/json',
//                     'Authorization':`JWT ${localStorage.getItem('access')}`,
//                 }
//             };
//             const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/inbox/${id}`,config,{withCredentials:true});
//             const dmsg = res.data.messages;
//             // console.log(dmsg.length)
//             // console.log(messages)
//             console.log(dmsg.length,messages.length)
//             // if (dmsg.length > messages.length) {
//             //     console.log("Update")
//             //     setMessages(res.data.messages);
//             // }else{
//             //     console.log("No Need to update")
//             // }
//         } catch (error) {
//             console.log(error)
//         }
//         }, 2000); // Check every 5 seconds

//         return () => {
//         // Clear the interval when the component unmounts
//         clearInterval(interval);
//     };
// }, []);