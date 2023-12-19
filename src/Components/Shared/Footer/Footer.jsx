import './Footer.css'
import { FaRegUserCircle } from "react-icons/fa";
const Footer = () => {
  const newYear = new Date().getFullYear();
  return (
    <footer className="footer py-6 ">
      <p className='flex  md:text-2xl text-lg mx-auto'>&copy; <span id="currentYear">{newYear}</span> - All Rights Reserved By Kaeskanest</p>
    </footer>
  );
};

export default Footer;
