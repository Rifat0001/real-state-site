import { useEffect, useState } from "react";
import { FaThLarge, FaThList } from "react-icons/fa";
import SingleProperty from "./SingleProperty";
import { Link } from "react-router-dom";
import axios from "axios";
const TabComponent = () => {
  const [propertyCard, setPropertyCard] = useState([]);
  const loadDAta = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/hprop`, { withCredentials: true });
      setPropertyCard(res.data)

    } catch (error) {
    }
  }

  useEffect(() => {
    loadDAta();
  }, [])


  return (
    <div className=" bg-[#F0F2F5] py-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
      {/* Section Title */}
      <div>
        <p className="flex items-center justify-center gap-1">
          <span>Read About</span>
          <span>Our Properties</span>
        </p>
        <h1 className="md:text-5xl text-3xl font-bold md:font-semibold text-center text-gradient text-black">Get Your Best Match</h1>
      </div>
      {/* Tabs */}

      <div
        id="SingleCard"
        className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-between mt-10 gap-x-6 gap-y-6"
      >
        {propertyCard.map((e, index) => (
          <SingleProperty key={index} singleCard={{ area: e.loc, title: e.title, price: e.price, currency: e.price_unit, image: e.thumbnail, country: e.address.country, state: e.address.state, bed: e.details.bed, bath: e.details.bath, size: e.details.size, size_unit: e.details.size_unit, price_type: e.price_type, sku: e.sku }} />

        ))}

      </div>
      <div className="flex justify-center items-center my-4">
        <Link to='/property-lists'><button className="btn border-none btn-gradient">See More</button></Link>
      </div>
    </div>
  );
};

export default TabComponent;