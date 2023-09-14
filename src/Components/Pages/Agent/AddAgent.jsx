import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";

const AddAgent = () => {
    return (
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 ">
            <h1 className="text-center font-semibold primary-color text-2xl">Add Agent</h1>
            <div className="flex gap-4 py-4">
                <input className='w-full border border-black p-2 rounded-md text-black' placeholder='Search by agent email' type="text" />
                <button className="btn btn-gradient">Search</button>
            </div>
            {/* agent card  */}
            <div className="card md:w-96 w-full card-compact text-black bg-base-100 shadow-xl rounded-md">
                <div className="relative">
                    <figure>

                        <img
                            src="https://pariswpresidence.b-cdn.net/wp-content/uploads/2018/06/person3-500x328.jpg"
                            alt="Shoes"
                        />
                    </figure><div className="absolute top-4 right-4 btn-gradient btn w-[80px] btn-sm "> Add
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">René Descartes</h2>
                    <h2 className=" text-[18px]">real estate broker</h2>
                    <p className=" py-2">
                        Michael’s sociability, independent spirit, and incredible
                        customer service set him apart a...
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center justify-between gap-3">
                            <FaFacebook size={20}></FaFacebook>
                            <FaTwitter size={20}></FaTwitter>
                            <FaLinkedin size={20}></FaLinkedin>
                            <FaPinterest size={20}></FaPinterest>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            <FaEnvelope size={20}></FaEnvelope>
                            <FaPhone size={20}></FaPhone>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAgent;