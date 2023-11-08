import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Meet() {
    const [list, setlist] = useState([]);
    // Function to fetch initial conversation and messages
    const fetchInitial = async() => {
        try {
            const config ={
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/meet/`,config,{withCredentials:true});
            setlist(res.data.users);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchInitial();
    }, []);

    return (
        <div>
            {list.map((e, i)=>{
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