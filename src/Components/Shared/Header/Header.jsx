import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";

const Header = () => {
    return (
        <div className="max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4">
            <TopBar></TopBar>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;