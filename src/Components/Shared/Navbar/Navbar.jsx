import { FaUser } from 'react-icons/fa';
import './NavBar.css'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="sm:navbar-start md:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-start hidden text-black font-semibold  lg:flex">
                <ul className="menu ms-[-30px] main menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Service</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-6">
                <div className='border border-primary p-2 rounded-full'>
                    <FaUser className='text-primary'></FaUser>
                </div>
                <a className="btn btn-outline btn-primary btn-sm text-white">Add Listing</a>
            </div>
        </div>
    );
};

export default Navbar;