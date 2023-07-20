import FindProperty from "../../HomeComponents/FindProperty";
import GetinTouch from "../../HomeComponents/GetinTouch";
import GoogleMap from "../../HomeComponents/GoogleMap";
import Tab from "../../HomeComponents/Tab";

const Home = () => {
    return (
        <div>
            {/* TO DO INSERT A MAP WITH FEATURES */}
            <GoogleMap></GoogleMap>
            <FindProperty></FindProperty>
            {/* TO DO MAKE A TAB USING FAKE DATA WITH FILTERS */}
            <Tab></Tab>
            <GetinTouch></GetinTouch>
        </div>
    );
};

export default Home;