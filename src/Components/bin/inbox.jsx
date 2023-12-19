import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Inbox() {
    const params = useParams();
    const id = params.id;
    const [messages, setMessages] = useState([]);
    const [mi, setMi] = useState("")
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
    //       setMessages(newMessages);
    //     } catch (error) {
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
                } else {
                }
            } catch (error) {
            }


            //     // Check if the new messages list is longer than the old one
            //     if (newMessages.length > messages.length) {
            //       setMessages(newMessages);
            //     } else {
            //     }
            //   } catch (error) {
            //   }
        };

        fetchData(); // Call the function when the component mounts
        const interval = setInterval(fetchData, 2000); // Fetch data every 2 seconds

        return () => {
            // Clear the interval when the component unmounts
            clearInterval(interval);
        };
    }, [messages]);

    const handleValue = (e) => {
        setMi(e.target.value)
    }
    // Handle sending new messages and updating the UI
    const sendMessage = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/inbox/${id}/`, {
                "message": mi
            }, config, { withCredentials: true });
            setMi("")
            // setMessages((prevList) => [...prevList, res.data.message]);
        } catch (error) {
        }
    }
    return (
        <>
            <div>
                {messages && messages.map((e, i) => {
                    return (
                        <div key={i}>
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" key={i}>[{e.id}]{e.sender}:{e.message}</button>
                        </div>
                    )
                })}
            </div>
            <textarea onChange={e => handleValue(e)} className="textarea textarea-warning" placeholder="message"></textarea>
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
//             // if (dmsg.length > messages.length) {
//             //     setMessages(res.data.messages);
//             // }else{
//             // }
//         } catch (error) {
//         }
//         }, 2000); // Check every 5 seconds

//         return () => {
//         // Clear the interval when the component unmounts
//         clearInterval(interval);
//     };
// }, []);