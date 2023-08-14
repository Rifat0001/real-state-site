import { useEffect, useState } from "react";
import { FaBath, FaBed, FaHeart, FaPrint, FaQrcode, FaShareAlt } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";


const ItemInfo = () => {
    const items = useLoaderData();
    console.log(items);
  const { id } = useParams();
    console.log(id);

    const [item, setItem] = useState({});
  useEffect(() => {
    const itemData = items.find((i) => i.id == id);
    setItem(itemData);
  }, []);
    return (
        <div className=" bg-[#F0F2F5] py-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
            <button className="btn btn-primary mr-2">{item.type}</button><button className="btn btn-accent">{item.status}</button>
            <div className="flex items-center justify-between py-4">
                <div>
                    <h2 className=" text-4xl font-bold">{item.title}</h2>
                    <p className="font-semibold pt-2">{item.city}, {item.state}</p>
                </div>
                <div className=" space-y-2">
                    <h2 className="text-3xl font-bold text-right">€ {item.price}</h2>
                    <div className="flex items-center justify-end gap-4">
                        <button className="btn bg-white border-none hover:bg-white text-black"><FaShareAlt /> Share</button>
                        <button className="btn bg-white border-none hover:bg-white text-black"><FaHeart /> Favorite</button>
                        <button className="btn bg-white border-none hover:bg-white text-black"><FaPrint /> Print</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center justify-center">
                <div className=" col-span-2">
                    <div className="bg-white py-6 px-7 space-y-3">
                        <h2 className="font-bold text-xl">Overview</h2>
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="font-semibold">Updated On:</h2>
                                <p className="font-bold">February 9, 2023</p>
                            </div>
                            <div className="flex flex-col items-center justify-center font-bold">
                                <FaBed />
                                <p>{item.beds} Bedrooms</p>
                            </div>
                            <div className="flex flex-col items-center justify-center font-bold">
                                <FaBath />
                                <p>{item.baths} Bathrooms</p>
                            </div>
                            <div className="flex flex-col items-center justify-center font-bold">
                                <FaQrcode />
                                <p>{item.sizes} m<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-6 px-7 space-y-3 my-5">
                        <h2 className="font-bold text-xl">Description</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className="bg-white py-6 px-7 space-y-3 my-5">
                        <h2 className="font-bold text-xl">Address</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div>sdf</div>
            </div>
        </div>
    );
};

export default ItemInfo;