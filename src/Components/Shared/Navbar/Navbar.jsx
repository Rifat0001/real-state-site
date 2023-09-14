import { FaUser } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = <>
    <li>
      <a>

        <Link className="text-[16px] text-black hover:text-primary active:text-primary" to="/">Home</Link>
      </a>
    </li>
    <li>
      <Link className="text-[16px] text-black  hover:text-primary active:text-primary" to="/about">About</Link>
    </li>
    <li>
      <Link className="text-[16px] text-black  hover:text-primary active:text-primary" to="/property-lists">Property List</Link>
    </li>
    <li>
      <Link className="text-[16px] text-black  hover:text-primary active:text-primary" to="/contact">Contact</Link>
    </li>
    <li>
      <Link className="text-[16px] text-black  hover:text-primary active:text-primary" to='agents'>Agents List</Link>
    </li>
    <li>
      <Link className="text-[16px] text-black  hover:text-primary active:text-primary" to='agentprofile'>Agent Profile</Link>
    </li>
    <li>
      <Link className="text-[16px] text-black  hover:text-primary active:text-primary" to="/organization">Organization</Link>
    </li>
  </>
  return (
    <div className="navbar ">
      <div className="sm:navbar-start md:hidden ">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-light btn-outline btn-sm border-3 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  bg-white text-black font-semibold menu-sm dropdown-content mt-3 z-[2] p-2 shadow  rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-primary italic font-bold text-[20px]">
          <Link to='/'>Real State</Link>
        </a>
      </div>
      <div className="navbar-start w-2/3 hidden text-black font-semibold  lg:flex">
        <ul className="menu ms-[-30px] main menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end  ms-10 md:ms-0 w-1/3 md:gap-6 gap-2">

        <Link to='/add-listing' className="btn hidden md:flex btn-gradient border-none drop-shadow-md btn-sm">
          Add Listing
        </Link>
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
    </div >
  );
};

export default Navbar;
