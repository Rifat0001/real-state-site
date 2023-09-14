import { Link } from "react-router-dom";
import './Nav.css';
import { FaUser } from "react-icons/fa";
const Nav = () => {
    const navItems = <>
        <li>
            <Link className="text-[16px] nav-link" to="/">Home</Link>
        </li>
        <li>
            <Link className="text-[16px] nav-link" to="/about">About</Link>
        </li>
        <li>
            <Link className="text-[16px] nav-link" to="/property-lists">Property List</Link>
        </li>
        <li>
            <Link className="text-[16px] nav-link" to="/contact">Contact</Link>
        </li>
        <li>
            <Link className="text-[16px] nav-link" to='agents'>Agents List</Link>
        </li>
        <li>
            <Link className="text-[16px] nav-link" to='agentprofile'>Agent Profile</Link>
        </li>
        <li>
            <Link className="text-[16px] nav-link" to="/organization">Organization</Link>
        </li>
        <li>
            <Link className="text-[16px] nav-link" to='/add-listing'>Add Listing</Link>
        </li>
    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="primary-color normal-case font-bold text-2xl">
                    <Link to='/'>Real State</Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end  ">

                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn  btn-gradient border-none  btn-sm  m-1">
                        <FaUser className=""></FaUser>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[2] mt-4 menu p-2 drop-shadow-lg bg-white text-black  font-semibold  rounded-box w-52">
                        <li >
                            <a > <Link to="/login" className="hover:text-primary text-black">
                                Login
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/setting" className="hover:text-primary text-black">
                                Setting
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/profile-setting" className="hover:text-primary text-black">
                                Profile Setting
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/myProperty" className="hover:text-primary text-black">
                                My Property
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/myAgents" className="hover:text-primary text-black">
                                My Agent
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/addAgent" className="hover:text-primary text-black">
                                Add Agent
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/add-listing" className="hover:text-primary md:hidden flex text-black">
                                Add Listing
                            </Link></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;