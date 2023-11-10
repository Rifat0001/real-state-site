import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Inbox() {
    const params = useParams();
    const id = params.id;
    console.log(id)
    const [messages, setMessages] = useState([]);
    const [mi, setMi] = useState("")
    const [isSending, setIsSending] = useState(false);
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

    const handleValue = (e) => {
        setMi(e.target.value)
    }
    const sendMessage = async () => {
        try {
            setIsSending(true); // Set sending status to true

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/inbox/${id}/`, {
                "message": mi
            }, config, { withCredentials: true });
        } catch (error) {
            console.log(error);
        } finally {
            setIsSending(false); // Reset sending status to false regardless of success or failure
        }
    }

    console.log(messages)

    return (
        <section className='max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4  h-auto'>
            {/* my design  */}
            <div>
                {messages && messages.map((e, i) => {
                    const class_name = (id==e.sender_id)?"btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary":"btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary";
                    return (
                        <div key={i}>
                            <div className="chat chat-start" key={i}>
                                <div className="chat-header">
                                    {e.sender}
                                    {/* <time className="text-xs opacity-50">2 hour ago</time> */}
                                </div>
                                {/* <div className="chat-bubble">{e.message}</div> */}
                                <div className={class_name}>{e.message}</div> 
                                {/* <div className="chat-footer opacity-50">
                                    Delivered
                                </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* chat design started  */}

            {/* chat design end  */}
            <div className="flex gap-4 my-6">
                <textarea onChange={e => handleValue(e)} className="textarea textarea-success text-black h-8 w-full" placeholder="message"></textarea>
                <button className="btn btn-gradient" onClick={sendMessage}>
                    {isSending ? (
                        <span className="loading loading-spinner loading-xl text-white"></span>
                    ) : (
                        "Send"
                    )}
                </button>

            </div>
        </section>
    );
}

export default Inbox;