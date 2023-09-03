import { FaUser } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = <>
    <li>
      <a>

        <Link to="/">Home</Link>
      </a>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/property-lists">Property List</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <a>Blog</a>
    </li>
    <li>
      <details>
        <summary className="text-[16px] hover:text-primary">Agents</summary>
        <ul className="p-2 bg-white">
          <Link to='agents'><li>
            <a>Agents List</a>
          </li></Link>
          <li>
            <Link to='agentprofile'><a>Agent Profile</a></Link>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <Link to="/organization">Organization</Link>
    </li>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="sm:navbar-start md:hidden ">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-primary btn-outline btn-sm lg:hidden"
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-white text-black font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-primary italic font-bold text-[20px]">
          Real State
        </a>
      </div>
      <div className="navbar-start w-2/3 hidden text-black font-semibold  lg:flex">
        <ul className="menu ms-[-30px] main menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end  ms-8 md:ms-0 w-1/3 md:gap-6 gap-2">
        <a className="btn btn-outline btn-primary btn-xs md:btn-sm text-white">
          Add Listing
        </a>
        <Link to="/login" className="border border-primary  p-2 rounded-full">
          <FaUser className="text-primary"></FaUser>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
