import { FaPhoneAlt, FaSearchLocation, FaRegClock } from 'react-icons/fa';
const TopBar = () => {
    return (
        <div className="md:flex justify-between mt-4 hidden ">
            <div>
                <h1 className="text-primary font-bold text-4xl italic">Real State</h1>
            </div>
            {/* for call service  */}
            <div className='flex items-center gap-4'>
                <FaPhoneAlt className='text-primary text-3xl'></FaPhoneAlt>
                <div>
                    <p className='text-black font-medium'>+123456789</p>
                    <p className='text-black font-medium'>Call Us Today</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaSearchLocation className='text-primary text-3xl'></FaSearchLocation>
                <div>
                    <p className='text-black font-medium'>New York City</p>
                    <p className='text-black font-medium'>Our Address</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaRegClock className='text-primary text-3xl'></FaRegClock>
                <div>
                    <p className='text-black font-medium'>10AM - 8PM</p>
                    <p className='text-black font-medium'>Open EveryDay</p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;