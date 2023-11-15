import { } from 'react-icons/fa';
import './PropertyList.css'
import { useEffect, useState } from 'react';
import SingleProperty from '../../HomeComponents/SingleProperty';
import MapComponent from "../map";
import { useParams } from 'react-router-dom';
import axios from 'axios';
const PropertyList = () => {
    const params = useParams();
    const id = params.id;
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const lat = url.searchParams.get('lat');
    const long = url.searchParams.get('long');
    const property_category = url.searchParams.get('property_category');
    const post_type = url.searchParams.get('post_type');
    const location = url.searchParams.get('location');
    const [propertyCard, setPropertyCard] = useState();

    // const [price, setPrice] = useState(40);
    const preLoad = async (data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/search/`, {
                params: data
            }, config, { withCredentials: true });
            console.log(res.data)
            setPropertyCard(res.data)
            console.log(propertyCard)
        }
        catch (error) {
            console.log(error.response.data);
        }
    }
    useEffect(() => {
        if (id === undefined) {
            console.log('Normal')
        }
        else {
            console.log(id, lat, long, property_category, post_type)
            const data = {
                type: post_type,
                category: property_category,
                location: location,
                lat: lat,
                long: long
            }
            preLoad(data);
        }

    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  ">
            <div className='md:w-11/12 mx-6 w-full h-full '>
                <div className='md:sticky md:top-24'>
                    <MapComponent location={location} ></MapComponent>
                </div>
            </div>
            <div className='w-full md:px-2 py-4 md:mt-0'>
                {/* for search fields  */}
                <div className=''>
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
                <div className=''>
                    {/* before property  */}
                    <div className='flex justify-between my-5 items-center'>
                        <h1 className='text-3xl md:text-4xl text-gradient font-semibold'>Our Properties</h1>

                    </div>
                    <div
                        id="SingleCard"
                        className="grid my-4 md:grid-cols-2 xl:grid-cols-2 items-center justify-between gap-x-6 gap-y-6"
                    >
                        {propertyCard && propertyCard.map((e, index) => (
                            <SingleProperty key={index} singleCard={{ area: e.loc, title: e.title, price: e.price, currency: e.price_unit, image: e.thumbnail, country: e.address.country, state: e.address.state, bed: e.details.bed, bath: e.details.bath, size: e.details.size, size_unit: e.details.size_unit, price_type: e.price_type, sku: e.sku }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;

