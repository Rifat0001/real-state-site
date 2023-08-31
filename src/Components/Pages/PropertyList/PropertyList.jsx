import { FaSearch } from 'react-icons/fa';
import './PropertyList.css'
import { useState } from 'react';
const PropertyList = () => {
    const [value, setValue] = useState(40);
    return (
        <div className="grid grid-cols-2 ">
            <div className='w-full'>  <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=newyork+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe></div>

            <div className='px-8'>
                {/* for search fields  */}
                <div>
                    <div className=''>
                        <input className='w-full border border-black p-2 rounded-md text-black' placeholder='Enter your location' type="text" />
                    </div>
                    <div className='flex items-center my-3'>
                        <h2 className='text-black font-semibold w-40'>Radius: {value} km</h2>
                        <input
                            type="range"
                            min={0}
                            max={150}
                            value={value}
                            className="range range-xs range-primary"
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;