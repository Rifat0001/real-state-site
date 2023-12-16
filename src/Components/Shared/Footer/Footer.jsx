import './Footer.css'
const Footer = () => {
  const newYear = new Date().getFullYear();
  return (
    <footer className="footer py-6 ">
      <p className='flex  text-2xl mx-auto'>&copy; <span id="currentYear">{newYear}</span> - All Rights Reserved By Kaeskanest</p>
    </footer>
  );
};

export default Footer;
