import { Link } from "react-router-dom";
import './Nav.css';
import { FaUser } from "react-icons/fa";

import { connect } from "react-redux";
import { logout } from "../../../actions/auth";
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
const Nav = ({ logout, isAuthenticated, auth }) => {
    const user = useSelector((state) => state.auth.user);
    const guestLinks = () => {
        return (
            <>
                <Link to="/login" >
                    <li><p className="hover:text-[#0E8E94] text-black">Login</p></li>
                </Link>
            </>
        )
    }
    const authLinks = () => {
        const organizeration = <>
            <Link to="/myProperty" >
                <li><p className="hover:text-[#0E8E94] text-black">My Property</p></li>
            </Link>
            <Link to="/myAgents" >
                <li><p className="hover:text-[#0E8E94] text-black">My Agent</p></li>
            </Link>
            <Link to="/addAgent" >
                <li><p className="hover:text-[#0E8E94] text-black">Add Agent</p></li>
            </Link>
            <Link to="/add-listing" >
                <li><p className="hover:text-[#0E8E94] text-black">Add Listing</p></li>
            </Link>
        </>
        const agent = <>
            <Link to="/myProperty" >
                <li><p className="hover:text-[#0E8E94] text-black">My Property</p></li>
            </Link>
            <Link to="/add-listing" >
                <li><p className="hover:text-[#0E8E94] text-black">Add Listing</p></li>
            </Link>
        </>

        return (
            <>
                <Link to="/setting" >
                    <li><p className="hover:text-[#0E8E94] text-black">Settings</p></li>
                </Link>
                <Link to="/notification" >
                    <li><p className="hover:text-[#0E8E94] text-black">Notification</p></li>
                </Link>

                <Link to="/profile-setting" >
                    <li><p className="hover:text-[#0E8E94] text-black">Profile Setting</p></li>
                </Link>
                {user && user['role'] == '3' ? organizeration : <></>}
                {user && user['role'] == '2' ? agent : <></>}
                {/* <Link to="/myProperty" >
                    <li><p className="hover:text-[#0E8E94] text-black">My Property</p></li>    
                </Link>
                <Link to="/myAgents" >
                    <li><p className="hover:text-[#0E8E94] text-black">My Agent</p></li>    
                </Link>
                <Link to="/addAgent" >
                    <li><p className="hover:text-[#0E8E94] text-black">Add Agent</p></li>    
                </Link> 
                <Link to="/add-listing" >
                    <li><p className="hover:text-[#0E8E94] text-black">Add Listing</p></li>    
                </Link>
                */}
                <Link to="/" >
                    <li><p className="hover:text-[#0E8E94] text-black" onClick={logout}>Logout</p></li>
                </Link>
            </>
        )
    }
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
        {/* <li>
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
        </li> */}
    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-black font-bold lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-white rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="primary-color normal-case font-bold text-lg md:text-2xl">
                    <Link to='/'>Kaeskanest</Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end  ">

                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn us  hover:bg-[#0E8E94] bg-white border  btn-sm  drop-shadow-2xl m-1">
                        <FaUser className="text-color hover:text-white"></FaUser>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[2] mt-4 menu p-2 drop-shadow-lg bg-white text-black  font-semibold  rounded-box w-52">
                        {isAuthenticated ? authLinks() : guestLinks()}
                        {/*OLD CODE <li >
                            <a > <Link to="/login" className="hover:text-[#0E8E94] text-black">
                                Login
                            </Link>
                            </a>
                        </li> */}

                        {/* <Link to="/login" >
                            <li><p className="hover:text-[#0E8E94] text-black">Login</p></li>    
                        </Link>
                        <li >
                            <a > <Link to="/setting" className="hover:text-[#0E8E94] text-black">
                                Setting
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/profile-setting" className="hover:text-[#0E8E94] text-black">
                                Profile Setting
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/myProperty" className="hover:text-[#0E8E94] text-black">
                                My Property
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/myAgents" className="hover:text-[#0E8E94] text-black">
                                My Agent
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/addAgent" className="hover:text-[#0E8E94] text-black">
                                Add Agent
                            </Link></a>
                        </li>
                        <li >
                            <a > <Link to="/add-listing" className="hover:text-[#0E8E94] md:hidden flex text-black">
                                Add Listing
                            </Link></a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Nav);