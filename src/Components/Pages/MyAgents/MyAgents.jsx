import {
    FaEnvelope,
    FaFacebook,
    FaLinkedin,
    FaPhone,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
const MyAgents = () => {
    const [agents, setAgents] = useState([]);
    const fetchData = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            };
            const res = await axios.get(
                `${import.meta.env.VITE_APP_API_URL}/api/myAgents/`,
                config,
                { withCredentials: true }
            );
            console.log(res.data);
            setAgents(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const remove = async (eID) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            };
            const res = await axios.post(
                `${import.meta.env.VITE_APP_API_URL}/api/removeAgent/${eID}/`,
                {},
                config,
                { withCredentials: true }
            );
            console.log(res.data);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };
    const removeAgent = (eID) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove agent"
        }).then((result) => {
            if (result.isConfirmed) {
                remove(eID);
                Swal.fire({
                    title: "Removed!",
                    text: "Your Agent has been removed.",
                    icon: "success"
                });
            }
        });

    };
    return (
        <div className="max-w-[2150px]  py-4 pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
            <div className="">
                <div className=" col-span-2">
                    <div className=" space-y-4">
                        <h1 className="font-bold primary-color text-center text-5xl">
                            My Agents List
                        </h1>
                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 py-5 items-center justify-between gap-3">
                        {agents &&
                            agents.map((e, i) => {
                                return (
                                    <div
                                        className="card card-compact w-96 bg-base-100 shadow-xl rounded-md"
                                        key={i}
                                    >
                                        <div className="relative">
                                            {/* <figure>
                        {console.log(e)}
                        <img
                          src={`${import.meta.env.VITE_APP_API_URL}/${e.image}`}
                          alt="Shoes"
                        />
                      </figure> */}
                                            <div
                                                onClick={() => removeAgent(e.id)}
                                                className="absolute top-4 right-4  bg-white text-error border border-error hover:border-white hover:bg-error btn w-[80px] btn-sm hover:text-white"
                                            >
                                                Remove
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h2 className="card-title">{e.name}</h2>
                                            <h2 className=" text-[18px]">real estate broker</h2>
                                            <p className=" py-2">{e.description}</p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center justify-between gap-3">
                                                    <a className="" href={e.facebook_link} target="blank">
                                                        <FaFacebook className="" size={20}>
                                                            {e.facebook_link}
                                                        </FaFacebook>
                                                    </a>
                                                    <a className="" href={e.twitter} target="blank">
                                                        <FaTwitter size={20}>{e.twitter}</FaTwitter>
                                                    </a>
                                                    <a className="" href={e.linkedin_link} target="blank">
                                                        <FaLinkedin size={20}>{e.linkedin_link}</FaLinkedin>
                                                    </a>
                                                    <a className="" href={e.pinterest} target="blank">
                                                        <FaPinterest size={20}>{e.pinterest}</FaPinterest>
                                                    </a>
                                                </div>
                                                <div className="flex items-center justify-between gap-3">
                                                    <a href={`mailto:${e.email}`}>
                                                        {" "}
                                                        <FaEnvelope size={20}>{e.email}</FaEnvelope>
                                                    </a>
                                                    <a href={`tel::${e.number}`}>
                                                        <FaPhone size={20}>{e.number}</FaPhone>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                {/* NO NEED || JUST FIX LAYOUT */}
                {/* <div>
                    <div className=" bg-white text-black shadow-lg rounded py-8 px-5">
                        <h1 className="font-bold text-gradient mb-4 text-2xl">Advanced Search</h1>
                        <div className="flex flex-col items-center justify-between space-y-4">
                            <input
                                type="text"
                                placeholder="Type address, city, state or area"
                                className="input border-black w-full max-w-xs"
                            />
                            <select className="select  border-black w-full max-w-xs">
                                <option disabled selected>
                                    Types
                                </option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <select className="select  border-black w-full max-w-xs">
                                <option disabled selected>
                                    Categories
                                </option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <select className="select  border-black w-full max-w-xs">
                                <option disabled selected>
                                    Bedrooms
                                </option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <select className="select  border-black w-full max-w-xs">
                                <option disabled selected>
                                    Min. Baths
                                </option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <select className="select  border-black w-full max-w-xs">
                                <option disabled selected>
                                    Stories Number
                                </option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Min. Size"
                                className="input border-black w-full max-w-xs"
                            />
                            <input
                                type="text"
                                placeholder="Year Built"
                                className="input border-black w-full max-w-xs"
                            />
                            <h2>Price range: € 0 to € {value}</h2>
                            <input
                                type="range"
                                min={0}
                                max={15000}
                                value={value}
                                className="range range-success range-xs"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <p>More Search Options</p>
                            <button className="btn btn-gradient w-full">Search</button>
                        </div>
                    </div>
                    <div className=" bg-white text-black shadow-lg rounded py-8 px-5 mt-5">
                        <h1 className="font-bold text-2xl primary-color">Mortgage Calculator</h1>
                        <div className="flex flex-col items-center justify-between space-y-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-black">Sale Price</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="100000"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    <span className="label-text text-black">Percent Down</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="10"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    <span className="label-text text-black">Term (Year)</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="30"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    <span className="label-text text-black">Interest Rate in %</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="5"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <button className="btn w-full btn-gradient">Calculate</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default MyAgents;
