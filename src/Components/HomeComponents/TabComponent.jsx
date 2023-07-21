import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleProperty from "./SingleProperty";
const TabComponent = () => {
  const [propertyCard, setPropertyCard] = useState([])
  useEffect(()=>{
    fetch('property.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPropertyCard(data)
    })
  },[])
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
      <div>
        <div>
          <details className="dropdown mb-32">
            <summary className="m-1 btn btn-ghost">
              Types <FaAngleDown />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              {/* <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li> */}
              <Tabs>
                <TabList>
                  <Tab>Types</Tab>
                  <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </ul>
          </details>
        </div>
      </div>
      {/* show card */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-x-3 gap-y-6">
      {
        propertyCard.map( (singleCard, index) => <SingleProperty key={index} singleCard={singleCard}/>)
      }
      </div>
    </div>
  );
};

export default TabComponent;
