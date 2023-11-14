import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
const Notification = () => {
    const [notifications,setNotification] = useState();
    const fetchNotification = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/invitations/`, config, { withCredentials: true });
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }
    useEffect(()=>{
        fetchNotification();
    },[])
    // const addAgent = async (email) => {
    //     try {
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `JWT ${localStorage.getItem('access')}`,
    //             }
    //         };
    //         const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/addAgent/`,{"email":email}, config, { withCredentials: true });
    //         console.log(res)
    //         Swal.fire({
    //             position: "top-center",
    //             icon: "success",
    //             title: res.data.message,
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     } catch (error) {
    //         console.log(error.response.data);
    //         Swal.fire({
    //             position: "top-center",
    //             icon: "info",
    //             title: error.response.data.message,
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    // }
    return (
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 h-[400px] ">
            {/* notifications */}
            <div className="card  w-full card-compact text-black bg-base-100 my-2 border drop-shadow-sm rounded-md">
                <div className="flex md:flex-row flex-col items-center justify-between px-4 py-3 border rounded-md">
                    <div className="">
                        <h2 className=" text-[18px] ps-4 md:text-start text-center ">Your website has been hacked</h2>
                    </div>
                    <div className="flex gap-8">
                        <div className="btn-success text-white btn btn-sm md:mt-0 mt-4 "> Accept
                        </div>
                        <button className="btn btn-sm btn-error text-white">Reject</button>
                    </div>
                </div>
            </div>
            {/* notifications */}
            <div className="card  w-full card-compact text-black bg-base-100 my-2 border drop-shadow-sm rounded-md">
                <div className="flex md:flex-row flex-col items-center justify-between px-4 py-3 border rounded-md">
                    <div className="">
                        <h2 className=" text-[18px] ps-4 md:text-start text-center ">Your website has been hacked</h2>
                    </div>
                    <div className="flex gap-8">
                        <div className="btn-success text-white btn btn-sm md:mt-0 mt-4 "> Accept
                        </div>
                        <button className="btn btn-sm btn-error text-white">Reject</button>
                    </div>
                </div>
            </div>
            {/* notifications */}
            <div className="card  w-full card-compact text-black bg-base-100 my-2 border drop-shadow-sm rounded-md">
                <div className="flex md:flex-row flex-col items-center justify-between px-4 py-3 border rounded-md">
                    <div className="">
                        <h2 className=" text-[18px] ps-4 md:text-start text-center ">Your website has been hacked</h2>
                    </div>
                    <div className="flex gap-8">
                        <div className="btn-success text-white btn btn-sm md:mt-0 mt-4 "> Accept
                        </div>
                        <button className="btn btn-sm btn-error text-white">Reject</button>
                    </div>
                </div>
            </div>
            {/* notifications */}
            <div className="card  w-full card-compact text-black bg-base-100 my-2 border drop-shadow-sm rounded-md">
                <div className="flex md:flex-row flex-col items-center justify-between px-4 py-3 border rounded-md">
                    <div className="">
                        <h2 className=" text-[18px] ps-4 md:text-start text-center ">Your website has been hacked</h2>
                    </div>
                    <div className="flex gap-8">
                        <div className="btn-success text-white btn btn-sm md:mt-0 mt-4 "> Accept
                        </div>
                        <button className="btn btn-sm btn-error text-white">Reject</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;