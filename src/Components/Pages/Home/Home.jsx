import AppDownLoad from "../../HomeComponents/AppDownLoad";
import FindProperty from "../../HomeComponents/FindProperty";
import GetinTouch from "../../HomeComponents/GetinTouch";
import GoogleMap from "../../HomeComponents/GoogleMap";
import Tab from "../../HomeComponents/TabComponent";

import { LoadScript } from '@react-google-maps/api';
const Home = () => {
    return (
        <div className="bg-[#F0F2F5]">
            {/* TO DO INSERT A MAP WITH FEATURES */}
            <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI" libraries={["places", "drawing"]} className='w-full'>
            <FindProperty></FindProperty>
            </LoadScript>
            {/* TO DO MAKE A TAB USING FAKE DATA WITH FILTERS */}
            <Tab></Tab>
            <GetinTouch></GetinTouch>
            <AppDownLoad></AppDownLoad>
        </div>
    );
};

export default Home;