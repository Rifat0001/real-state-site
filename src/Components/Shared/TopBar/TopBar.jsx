import { FaPhoneAlt, FaSearchLocation, FaRegClock } from 'react-icons/fa';
const TopBar = () => {
    return (
        <div className="md:flex justify-between md:px-40 py-4 hidden border-b ">
            <div>
                <h1 className="text-primary font-bold text-4xl italic">Real State</h1>
            </div>
            {/* for call service  */}
            <div className='flex items-center gap-4'>
                <FaPhoneAlt className='text-primary text-xl'></FaPhoneAlt>
                <div>
                    <p className='text-black font-medium'>+123456789</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaSearchLocation className='text-primary text-xl'></FaSearchLocation>
                <div>
                    <p className='text-black font-medium'>New York</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaRegClock className='text-primary text-xl'></FaRegClock>
                <div>
                    <p className='text-black font-medium'>10AM - 8PM</p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;