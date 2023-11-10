import AppDownLoad from "../../HomeComponents/AppDownLoad";
import BlogSection from "../../HomeComponents/BlogSection";
import FindProperty from "../../HomeComponents/FindProperty";
import GetinTouch from "../../HomeComponents/GetinTouch";
import GoogleMap from "../../HomeComponents/GoogleMap";
import Tab from "../../HomeComponents/TabComponent";

const Home = () => {
    return (
        <div className="bg-[#F0F2F5]">
            {/* TO DO INSERT A MAP WITH FEATURES */}

            <FindProperty></FindProperty>
            {/* TO DO MAKE A TAB USING FAKE DATA WITH FILTERS */}
            <Tab></Tab>
            <GetinTouch></GetinTouch>
            <AppDownLoad></AppDownLoad>
        </div>
    );
};

export default Home;