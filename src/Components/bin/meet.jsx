import { useState, useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
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
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <div>
                        {list.map((e, i) => {
                            return (
                                <div key={i}>
                                    {/* <Link to={`/inbox/${e.id}`} key={i}>
                                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                                            <FaRegUserCircle></FaRegUserCircle>
                                            {e.full_name}:{e.email}</button>
                                    </Link> */}
                                    <tr>
                                        <th>1</th>
                                        <td>{e.full_name}</td>
                                        <td>{e.email}</td>
                                        <td>Blue</td>
                                    </tr>
                                </div>
                            )
                        })}
                    </div>

                </tbody>
            </table>
        </div>
    );
}

export default Meet;