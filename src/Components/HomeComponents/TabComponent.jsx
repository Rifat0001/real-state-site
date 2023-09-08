import { useEffect, useState } from "react";
import { FaThLarge, FaThList } from "react-icons/fa";
import SingleProperty from "./SingleProperty";
const TabComponent = () => {
  const [propertyCard, setPropertyCard] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const [selectedState, setSelectedState] = useState("States");
  const [selectedCity, setSelectedCity] = useState("Cities");
  const [selectedArea, setSelectedArea] = useState("Areas");
  const [numColumns, setNumColumns] = useState(3);
  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPropertyCard(data);
      });
  }, []);

  const filteredPropertyCards = propertyCard.filter((card) => {
    const typeMatch =
      selectedType === "All" ||
      card.type.toLowerCase() === selectedType.toLowerCase();
    const categoryMatch =
      selectedCategory === "Categories" ||
      card.category === selectedCategory;
    const stateMatch =
      selectedState === "States" ||
      card.state === selectedState;
    const cityMatch =
      selectedCity === "Cities" ||
      card.city === selectedCity;
    const areaMatch =
      selectedArea === "Areas" ||
      card.area === selectedArea;

    return typeMatch && categoryMatch && stateMatch && cityMatch && areaMatch;
  });

  const handleList = () => {
    setNumColumns(1);
  };

  const handleGrid = () => {
    setNumColumns(2);
  };
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

      <div className="bg-white my-10 flex   items-center justify-between px-4 rounded">
        <div className="flex flex-wrap items-center justify-start gap-2">
          <select
            className="select hover:outline-none hover:border-none focus:ring-0"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="All">Types</option>
            <option value="Rentals">Rentals</option>
            <option value="Sales">Sales</option>
          </select>
          <select
            className="select hover:outline-none hover:border-none focus:ring-0"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="Categories">Categories</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="House">House</option>
            <option value="Industrial">Industrial</option>
            <option value="Land">Land</option>
          </select>
          <select className="select hover:outline-none hover:border-none focus:ring-0" onChange={(e) => setSelectedState(e.target.value)}>
            <option value="States">States</option>
            <option value="France">France</option>
          </select>
          <select className="select hover:outline-none hover:border-none focus:ring-0" onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="Cities">Cities</option>
            <option value="Paris">Paris</option>
            <option value="Montreuil">Montreuil</option>
          </select>
          <select className="select hover:outline-none hover:border-none focus:ring-0" onChange={(e) => setSelectedArea(e.target.value)}>
            <option value="Areas">Areas</option>
            <option value="Notre Dame">Notre Dame</option>
            <option value="Saint Germain">Saint Germain</option>
          </select>
        </div>

      </div>
      {/* show card */}
      <div
        id="SingleCard"
        className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-x-6 gap-y-6"
      >
        {filteredPropertyCards.map((singleCard, index) => (
          <SingleProperty key={index} singleCard={singleCard} />
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
