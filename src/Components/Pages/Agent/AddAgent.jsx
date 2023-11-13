import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";

const AddAgent = () => {
    return (
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 h-[400px] ">
            <h1 className="text-center font-semibold primary-color text-2xl">Add Agent</h1>
            <div className="flex gap-4 py-4">
                <input className='w-full border border-black p-2 rounded-md text-black' placeholder='Search by agent email' type="text" />
                <button className="btn btn-gradient">Search</button>
            </div>
            {/* agent card  */}

            {/* agent card  */}
            <div className="card  w-full card-compact text-black bg-base-100 shadow-md border rounded-md">
                <div className="flex items-center justify-between px-4 py-3 border rounded-md">
                    <div className="">
                        <h2 className=" text-[18px] font-bold">Raihan Chowdury</h2>
                        <h2 className=" text-[18px]">info@gmail.com</h2>
                    </div>
                    <div className=" btn-gradient btn w-[80px] btn-sm "> Add
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAgent;