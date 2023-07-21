import AppDownLoad from "../../HomeComponents/AppDownLoad";
import BlogCarousel from "../../HomeComponents/BlogCarousel";
import BlogSection from "../../HomeComponents/BlogSection";
import FindProperty from "../../HomeComponents/FindProperty";
import GetinTouch from "../../HomeComponents/GetinTouch";
import GoogleMap from "../../HomeComponents/GoogleMap";
import Tab from "../../HomeComponents/TabComponent";

const Home = () => {
    return (
        <div>
            {/* TO DO INSERT A MAP WITH FEATURES */}
            <GoogleMap></GoogleMap>
            <FindProperty></FindProperty>
            {/* TO DO MAKE A TAB USING FAKE DATA WITH FILTERS */}
            <Tab></Tab>
            <GetinTouch></GetinTouch>
            <AppDownLoad></AppDownLoad>
            <BlogSection></BlogSection>
        </div>
    );
};

export default Home;