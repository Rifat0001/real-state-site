import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PromoteSinglePorperty = ({ singleCard }) => {
    const {
        title,
        image,
        price,
        description,
        beds,
        baths,
        area,
        id,
    } = singleCard || null;
    return (
        <div className="card w-full h-full bg-white shadow-xl rounded-md">
            <div className="relative">
                <figure>

                    <img
                        src={image}
                        alt="Shoes"
                    />
                </figure>
                <Link to='/promote'><div className="absolute top-4 right-4  bg-white text-primary border border-primary hover:bg-primary hover:border-white btn w-[80px] btn-sm hover:text-white"> Promote
                </div></Link>
            </div>
            <div className="card-body">
                <h2 className="font-medium text-xl text-black">€ {price} / month</h2>
                <h2 className="font-bold text-xl text-black ">{title}</h2>
                <p className="text-black">{description}</p>
                <div className="flex text-black items-center justify-between pb-3">
                    <p>Beds: {beds}</p>
                    <p>Baths: {baths}</p>
                    <p>Area: {area}</p>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2">
                        <FaUserCircle className="text-black" /> <span className="font-bold text-black">Michael Suttherland</span>
                    </div>
                    <Link to={`../items/${id}`}><button className=" bg-primary px-2 py-1 rounded-md text-white font-bold">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PromoteSinglePorperty;