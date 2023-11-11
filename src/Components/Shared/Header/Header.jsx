import Nav from "../Nav/Nav";
import TopBar from "../TopBar/TopBar";

const Header = () => {
    return (
        <div className="sticky top-0 z-20">
            <TopBar></TopBar>
            <div className="max-w-[2150px]  bg-white mx-auto border-black border-b-2 xl:px-40 md:px-10 sm:px-2 px-4 ">
                <Nav></Nav>
            </div>
        </div>
    );
};

export default Header;