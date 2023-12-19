import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './inbox.css'
function Inbox() {
    const params = useParams();
    const id = params.id;
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
                } else {
                }
            } catch (error) {
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
            setMi("");
        } catch (error) {
        } finally {
            setIsSending(false); // Reset sending status to false regardless of success or failure
        }
    }


    return (
        <section className='max-w-[2150px] inbox-container mx-auto xl:px-40 md:px-10 sm:px-2 px-4  h-auto'>
            {/* my design  */}
            <div className='messages'>
                {messages &&
                    messages.map((e, i) => {
                        const isCurrentUser = String(id) === String(e.sender_id);
                        const chatClass = isCurrentUser ? "chat-start" : "chat-end";
                        const headerClass = isCurrentUser ? "" : "";
                        const bubbleStyle = !isCurrentUser ? { backgroundColor: '#0e8e94', color: 'white' } : {}; // Add this line

                        return (
                            <div key={i} className={`chat ${chatClass}`}>
                                <div className={`chat-header ${headerClass}`}>
                                    {e.sender}
                                    {/* <time className="text-xs opacity-50">2 hours ago</time> */}
                                </div>
                                <div className="chat-bubble" style={bubbleStyle}> {/* Add style attribute */}
                                    {e.message}
                                </div>
                                {/* <div className="chat-footer opacity-50">
              Delivered
          </div> */}
                            </div>
                        );
                    })}
            </div>



            {/* Text area part  */}
            <div className="flex text-area-container gap-4 my-6">
                <textarea value={mi} onChange={(e) => handleValue(e)} className="textarea textarea-success text-black h-8 w-full" placeholder="message"></textarea>
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