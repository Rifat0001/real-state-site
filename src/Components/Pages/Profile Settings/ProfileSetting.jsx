import { useState } from "react";
import '/src/Components/Settings/Settings.css'
const ProfileSetting = () => {
    return (
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 ">
            <h1 className="text-2xl pb-2 primary-color border-b-2  font-semibold"> Profile Settings</h1>
            <div className="mt-4">
                <div>
                    <div className="flex md:flex-row gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered border  border-black"
                                color="black"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your title"
                                className="input input-bordered border border-black"
                                color="black"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row my-6 gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="number"
                                placeholder="Enter your number"
                                className="input input-bordered border  border-black"
                                color="black"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered border border-black"
                                color="black"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row my-6 gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your skype link"
                                className="input input-bordered border  border-black"
                                color="black"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your website"
                                className="input input-bordered border border-black"
                                color="black"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row my-6 gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your facebook link"
                                className="input input-bordered border  border-black"
                                color="black"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your twitter"
                                className="input input-bordered border border-black"
                                color="black"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row my-6 gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your linkedin link"
                                className="input input-bordered border  border-black"
                                color="black"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your pinterest"
                                className="input input-bordered border border-black"
                                color="black"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea
                            name="message"
                            cols="10"
                            rows="20"
                            className="input input-bordered border-black shadow pt-2"
                            placeholder="Enter your description"
                        ></textarea>
                    </div>
                    <div className="my-6 flex ">
                        <button className="btn w-full btn-gradient ">Submit</button>
                    </div>
                </div>

            </div>
        </div >
    );
};



export default ProfileSetting;