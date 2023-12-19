import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
const Notification = () => {
    const [notifications,setNotifications] = useState();
    const fetchNotification = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/invitations/`, config, { withCredentials: true });
            setNotifications(res.data)
        } catch (error) {
        }
    }
    useEffect(()=>{
        fetchNotification();
    },[])
    const acceptInvitation = async (id) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/invitation/${id}/accept/`,{}, config, { withCredentials: true });
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                position: "top-center",
                icon: "info",
                title: error.response.data.error,
                showConfirmButton: false,
                timer: 1500
            });
        }finally{
            fetchNotification();
        }
    }
    const rejectInvitation = async (id) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/invitation/${id}/reject/`,{}, config, { withCredentials: true });
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                position: "top-center",
                icon: "info",
                title: error.response.data.error,
                showConfirmButton: false,
                timer: 1500
            });
        }finally{
            fetchNotification();
        }
    }
    return (
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 h-[400px] ">
            {/* notifications */}
            {notifications&& notifications.map((e,i)=>{
                return <div className="card  w-full card-compact text-black bg-base-100 my-2 border drop-shadow-sm rounded-md" key={i}>
                    <div className="flex md:flex-row flex-col items-center justify-between px-4 py-3 border rounded-md">
                        <div className="">
                            <h2 className=" text-[18px] ps-4 md:text-start text-center ">You received an invitation from the organization called "{e.organization}"!</h2>
                        </div>
                        <div className="flex gap-8">
                            <div className="btn-success text-white btn btn-sm md:mt-0 mt-4" onClick={()=>acceptInvitation(e.id)}> Accept
                            </div>
                            <button className="btn btn-sm btn-error text-white" onClick={()=>rejectInvitation(e.id)}>Reject</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

export default Notification;