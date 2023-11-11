import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Meet() {
    const [list, setlist] = useState([]);
    // Function to fetch initial conversation and messages
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
            list.map((e, i) => {
                console.log(e)
            })
            // console.log(list);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        // Fetch initial conversation and messages when the component mounts
        fetchInitial();
    }, []);

    // Handle sending new messages and updating the UI

    return (
        <div>
            {list.map((e, i) => {
                return (
                    <div key={i}>
                        <Link to={`/inbox/${e.id}`} key={i}>
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">{e.full_name}:{e.email}</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Meet;