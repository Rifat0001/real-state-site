import { FaSearch } from "react-icons/fa";
import './HomeComponents.css'
const FindProperty = () => {
    return (
        <div className="bg-slate-200 p-4 pb-8 rounded-md">
            <h3 className="text-3xl text-center my-4 font-semibold text-primary">Find Your Property</h3>
            <div className="flex">
                <div className="">
                    <button className="btn btn-outline btn-primary me-2 bg-white">Buy</button>
                    <button className="btn btn-outline btn-primary bg-white">Rent</button>
                </div>
                <div>
                    <select name="cars" className="border border-primary text-primary  w-[200px] h-[48px] rounded-md ms-4 p-2" id="cars">
                        <option value="volvo">Homes</option>
                        <option value="saab">Room</option>
                        <option value="opel">Garage</option>
                        <option value="audi">New Homes</option>
                    </select>
                </div>
                <div className="flex items-center gap-4 bg-white ms-20">
                    <FaSearch className="text-2xl ms-2"></FaSearch>
                    <input className="search border text-black h-full border-none" type="text" />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    );
};

export default FindProperty;