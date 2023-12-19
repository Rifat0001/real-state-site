import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
function ChatApp() {
    const user = useSelector((state) => state.auth.user);
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const searchParams = new URLSearchParams(document.location.search)
    const param = searchParams.get('q');

    // Function to fetch initial conversation and messages
    const fetchInitialMessages = async() => {
        try {
            const config ={
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/conversation/?q=${param}`,config,{withCredentials:true});
            setMessages(res.data.msg);
        } catch (error) {
        }
    };

    useEffect(() => {
        // Fetch initial conversation and messages when the component mounts
        fetchInitialMessages();

        // Periodically check for new messages
        const interval = setInterval(async() => {
        // Make an API request to check for new messages
        // Example API call to check for new messages:
        // fetch('/api/conversation/1/', { method: 'GET' })
        //   .then(response => response.json())
        //   .then(data => {
        //     if (data.messages.length > messages.length) {
        //       setNewMessageFlag(true);
        //     }
        //   })
        //   .catch(error => console.error(error));
        try {
            const config ={
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/conversation/?q=${param}`,config,{withCredentials:true});
            const dmsg = res.data.msg;
            if (dmsg.length > messages.length) {
                setMessages(res.data.msg);
                setNewMessageFlag(true);
            }
        } catch (error) {
        }
        }, 2000); // Check every 5 seconds

        return () => {
        // Clear the interval when the component unmounts
        clearInterval(interval);
        };
    }, []);

    // Handle sending new messages and updating the UI

    return (
        <div>
        <div>
            {/* Display the chat messages here */}
            {messages.map((message, index) => (
            <div key={index}>{message}</div>
            ))}
            {/* Display a notification for new messages */}
            {newMessageFlag && <div>New messages available</div>}
        </div>
        <div>
            {/* Input field for sending messages */}
            {/* You can implement the sending message functionality here */}
        </div>
        </div>
    );
}

export default ChatApp;