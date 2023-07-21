import { useEffect, useState } from "react";
import { FaThLarge, FaThList } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import SingleProperty from "./SingleProperty";
const TabComponent = () => {
  const [propertyCard, setPropertyCard] = useState([]);
  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPropertyCard(data);
      });
  }, []);
  return (
    <div className=" bg-[#F8F8F8] py-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
      {/* Section Title */}
      <div>
        <p className="flex items-center justify-center gap-1">
          <span>Read About</span>
          <span>Our Properties</span>
        </p>
        <h2 className="text-3xl font-bold text-center">
          We sell and buy a wide range of properties to <br /> suit all budgets
          and tastes
        </h2>
      </div>
      {/* Tabs */}

      <div className="bg-white my-10 flex items-center justify-between px-4 rounded">
        <div className="flex items-center justify-start gap-3">
          <select className="select hover:outline-none hover:border-none focus:ring-0">
            <option selected value="Types">
              Types
            </option>
            <option value="Rentals">Rentals</option>
            <option value="Sales">Condo</option>
          </select>
          <select className="select hover:outline-none hover:border-none focus:ring-0">
            <option selected value="All">
              Categories
            </option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="House">House</option>
            <option value="Industrial">Industrial</option>
            <option value="Land">Land</option>
          </select>
          <select className="select hover:outline-none hover:border-none focus:ring-0">
            <option selected value="States">
              States
            </option>
            <option value="France">France</option>
          </select>
          <select className="select hover:outline-none hover:border-none focus:ring-0">
            <option selected value="Cities">
              Cities
            </option>
            <option value="Paris">Paris</option>
            <option value="Montreuil">Montreuil</option>
          </select>
          <select className="select hover:outline-none hover:border-none focus:ring-0">
            <option selected value="Areas">
              Areas
            </option>
            <option value="Notre Dame">Notre Dame</option>
            <option value="Saint Germain">Saint Germain</option>
          </select>
        </div>
        <div className="flex items-center justify-between gap-4">
          <FaThList />
          <FaThLarge />
        </div>
      </div>
      {/* show card */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-x-6 gap-y-6">
        {propertyCard.map((singleCard, index) => (
          <SingleProperty key={index} singleCard={singleCard} />
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
