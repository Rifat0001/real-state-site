import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddAgent = () => {
    const [agents,setAgents] = useState([]);
    const fetchAutoComplete = async (e) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/autocomplete_agent_emails/?q=${e}`, config, { withCredentials: true });
            // console.log(res.data);
            setAgents(res.data);
            console.log(agents)
        } catch (error) {
            console.log(error.response.data);
        }
    }
    const addAgent = async (email) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/addAgent/`,{"email":email}, config, { withCredentials: true });
            console.log(res)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error.response.data);
            Swal.fire({
                position: "top-center",
                icon: "info",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    
    return (
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 ">
            <h1 className="text-center font-semibold primary-color text-2xl">Add Agent</h1>
            <div className="flex gap-4 py-4">
                <input className='w-full border border-black p-2 rounded-md text-black' placeholder='Search by agent email' type="text" onChange={(e)=>fetchAutoComplete(e.target.value)} />
                <button className="btn btn-gradient">Search</button>
            </div>
            {agents.map((e,i)=>{
                return <div key={i} className="card  w-full card-compact text-black bg-base-100 drop-shadow-sm my-3 border rounded-md">
                    <div className="flex md:flex-row flex-col items-center justify-between px-4 py-3 border rounded-md">
                        <div className="">
                            <h2 className=" text-[18px] md:text-start text-center font-bold ">{e.name}</h2>
                            <h2 className=" text-[18px] md:text-start text-center ">{e.email}</h2>
                        </div>
                        <div className=" btn-gradient btn w-[80px] btn-sm md:mt-0 mt-4 " onClick={()=>addAgent(e.email)}> Add
                        </div>
                    </div>
                </div>
            })}
            
            {/* agent card  */}

        </div>
    );
};

export default AddAgent;