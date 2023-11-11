import { FaPhoneAlt, FaSearchLocation, FaRegClock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TopBar = () => {
    return (
        <div className="md:flex justify-between md:px-40 py-1 bg-[#1D2C34] hidden border-b ">
            <a href="mailto:info@example.com" className='flex items-center gap-4'>
                <FaEnvelope className='text-[#0E8E94] text-sm'></FaEnvelope>
                <div>
                    <p className='text-white text-sm'>demo@gmail.com</p>
                </div>
            </a>
            <a href="tel:+1234567890" className='flex items-center gap-4'>

                <FaPhoneAlt className='text-[#0E8E94] text-sm'></FaPhoneAlt>
                <div>
                    <p className='text-white  text-sm'>+123456789</p>
                </div>
            </a>
            <div className='flex items-center gap-4'>
                <FaSearchLocation className='text-[#0E8E94] text-sm'></FaSearchLocation>
                <div>
                    <p className='text-white  text-sm'>New York</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaRegClock className='text-[#0E8E94] text-sm'></FaRegClock>
                <div>
                    <p className='text-white  text-sm'>10AM - 8PM</p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;