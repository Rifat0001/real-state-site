import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Meet() {
    const [list, setlist] = useState([]);
    // Function to fetch initial conversation and messages
    console.log(list)
    const fetchInitial = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/meet/`, config, { withCredentials: true });
            setlist(res.data.users);
            console.log(list)
        } catch (error) {
            console.log(error)
        }
    };

    console.log(list)

    useEffect(() => {
        fetchInitial();
    }, []);

    return (
        <div className="max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 md:h-[400px] h-auto">
            <p className='text-black font-semibold  mb-5 text-2xl'>Available Chats : <span className='my-color font-bold'>{list.length}</span></p>
            {list.map((e, i) => {
                console.log(e)
                return (
                    <div key={i}>
                        <Link to={`/inbox/${e.id}`} key={i}>
                            <button className="border-none text-black font-semibold text-xl hover:font-bold ms-[-10px] hover:text-[#0E8E94]">{e.full_name}:{e.email}</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Meet;