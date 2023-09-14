import { FaAddressBook, FaClosedCaptioning, FaEnvelope, FaMap, FaMapMarked, FaMapPin, FaMapSigns, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className=" text-black bg-[#F8F8F8]">
            <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 gap-2 items-start justify-between ">
                <h1 className="md:text-5xl text-3xl text-center text-gradient font-semibold mb-10">Get In Touch</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    {/* card one  */}
                    <div className="card border-2  py-8 bg-base-100 flex flex-col items-center shadow-xl">
                        <div className="border-2   circle p-4 rounded-full">
                            <FaMapMarked className="text-6xl text-[#0E8E94]"></FaMapMarked>
                        </div>
                        <div className="mt-4 text-center">
                            <h1 className="text-xl font-semibold ">New York, City</h1>
                            <p>Jatrabari, Dhaka</p>
                        </div>
                    </div>
                    {/* card one  */}
                    <div className="card border-2  py-8 bg-base-100 flex flex-col items-center shadow-xl">
                        <div className="border-2   circle p-4 rounded-full">
                            <FaEnvelope className="text-6xl text-[#0E8E94]"></FaEnvelope>
                        </div>
                        <div className="mt-4 text-center">
                            <h1 className="text-xl font-semibold ">Email</h1>
                            <p>abc@gmail.com</p>
                        </div>
                    </div>
                    {/* card one  */}
                    <div className="card border-2  py-8 bg-base-100 flex flex-col items-center shadow-xl">
                        <div className="border-2   circle p-4 rounded-full">
                            <FaPhone className="text-6xl text-[#0E8E94]"></FaPhone>
                        </div>
                        <div className="mt-4 text-center">
                            <h1 className="text-xl font-semibold ">Phone</h1>
                            <p>800 2541365</p>
                        </div>
                    </div>
                </div>
                {/* map and contact  */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                    <div className=" ">
                        <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=newyork+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
                    </div>
                    <div className=" space-y-4 form-control">
                        <h2 className="text-2xl font-bold text-black">Contact Us</h2>
                        <div className="flex items-center justify-normal gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input border  border-black w-full max-w-xs"
                            />
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="input border  border-black w-full max-w-xs"
                            />
                            <input
                                type="text"
                                placeholder="Your Phone"
                                className="input border  border-black w-full max-w-xs"
                            />
                        </div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            className="textarea textarea-bordered border border-black w-full my-2"
                        ></textarea>
                        <button className="btn btn-gradient">Send Email</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;