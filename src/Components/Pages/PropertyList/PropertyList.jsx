import { } from 'react-icons/fa';
import './PropertyList.css'
import { useEffect, useState } from 'react';
import SingleProperty from '../../HomeComponents/SingleProperty';
import MapComponent from "../map";
const PropertyList = () => {
    const [range, setRange] = useState(40);
    const [price, setPrice] = useState(40);
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
        <div className="grid grid-cols-1 md:grid-cols-2  ">
            <div className='w-full h-full map-position'>
                <div className='sticky top-24'>
                    <MapComponent></MapComponent>
                </div>
            </div>
            <div className='px-8 py-4 md:mt-0'>
                {/* for search fields  */}
                <div className=''>
                    <div className=''>
                        <input className='w-full border border-black p-2 rounded-md text-black' placeholder='Enter your location' type="text" />
                    </div>
                    {/* <div className='flex items-center my-3'>
                        <h2 className='text-black font-semibold w-40'>Radius: {range} km</h2>
                        <input
                            type="range"
                            min={0}
                            max={150}
                            value={range}
                            className="range range-xs range-success"
                            onChange={(e) => setRange(e.target.value)}
                        />
                    </div> */}
                    {/* <div className="grid grid-flow-row-dense grid-cols-3 gap-3">
                        <div className="col-span-2">
                            <input className='w-full border border-black h-10 rounded-md text-black ps-2' placeholder='Type address,city,area' type="text" />
                        </div>
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">Rental</option>
                                <option value="male">Sales</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2">
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">House</option>
                                <option value="male">Appartment</option>
                                <option value="other">Office</option>
                            </select>
                        </div>
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">Bedroom</option>
                                <option value="male">1</option>
                                <option value="other">2</option>
                                <option value="male">3</option>
                                <option value="other">4</option>
                            </select>
                        </div>
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">Min Baths</option>
                                <option value="male">1</option>
                                <option value="other">2</option>
                                <option value="male">3</option>
                                <option value="other">4</option>
                            </select>
                        </div>
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">Stories Number</option>
                                <option value="male">1</option>
                                <option value="other">2</option>
                                <option value="male">3</option>
                                <option value="other">4</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-2">
                        <div>
                            <input className='border w-full border-black p-2   rounded-md text-black' placeholder='Min. Size' type="text" />
                        </div>
                        <div>
                            <input className='border border-black p-2 rounded-md text-black  w-full' placeholder='Year Built' type="text" />
                        </div>
                    </div>
                    <div className='flex items-center my-3'>
                        <h2 className='text-black font-semibold w-60'>Price :
                            <span className='primary-color'>  € 0 to € {price} </span>
                        </h2>
                        <input
                            type="range"
                            min={0}
                            max={150000}
                            value={price}
                            className="range  range-xs range-success"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div> */}
                </div>
                {/* show properties  */}
                <div>
                    {/* before property  */}
                    <div className='flex justify-between my-5 items-center'>
                        <h1 className='text-3xl md:text-4xl text-gradient font-semibold'>Our Properties</h1>

                    </div>
                    <div
                        id="SingleCard"
                        className="grid my-4 md:grid-cols-2 xl:grid-cols-2 items-center justify-between gap-x-6 gap-y-6"
                    >
                        {propertyCard.map((singleCard, index) => (
                            <SingleProperty key={index} singleCard={singleCard} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;

