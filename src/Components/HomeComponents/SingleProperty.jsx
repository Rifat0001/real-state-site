import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProperty = ({ singleCard }) => {
  const {
    title,
    image,
    price,
    price_type,
    currency,
    bed,
    bath,
    country,
    state,
    size,
    size_unit,
    id,
  } = singleCard || null;
  return (
    <div className="w-96 h-full bg-gradient shadow-xl card rounded-md">
      <figure>
        <img
          src={`${import.meta.env.VITE_APP_API_URL}/${image}`}
          alt="Shoes" className="prop-img"
        />
      </figure>
      <div className="ps-8 pe-12 pb-4 pt-4">
        <h2 className="font-semibold text-2xl text-black">{currency} {price} {price_type}</h2>
        <h2 className="font-bold text-3xl text-gradient  ">{title}</h2>
        <div className="flex justify-between">

        <p className="text-md my-1"><span className="font-bold">Country:</span> {country}</p>
        <p className="text-md my-1"><span className="font-bold">State:</span> {state}</p>
        </div>
        <div className="flex justify-between">
          

            <p className="text-sm"><span className="font-bold">Beds:</span> {bed}</p>
            <p className="text-sm"><span className="font-bold">Baths:</span> {bath}</p>
            <p className="text-sm"><span className="font-bold">Size:</span> {size} {size_unit}</p>
         
        </div>
      </div>
      <div className="flex justify-end px-6 py-4">
        <button className="w-full bg-primary btn-gradient px-2 py-3  rounded-md border-none text-white font-bold"> <Link to={`../items/${id}`}>Details</Link></button>

      </div>

    </div>
  );
};

export default SingleProperty;
