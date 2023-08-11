import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";

const Header = () => {
    return (
        <div>
            <TopBar></TopBar>
            <div className="max-w-[2150px] bg-white mx-auto xl:px-40 md:px-10 sm:px-2 px-4">
                <Navbar></Navbar>
            </div>

        </div>
    );
};

export default Header;