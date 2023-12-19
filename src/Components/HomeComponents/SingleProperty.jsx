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
    sku,
    size,
    size_unit,
    id,
    area
  } = singleCard || null;
  return (
    <div className=" h-full bg-gradient shadow-xl card rounded-md text-black ">
      <figure>
        <img
          src={`${import.meta.env.VITE_APP_API_URL}/${image}`}
          alt="Shoes" className="w-full md:h-[270px] 
          h-[200px]"
        />
      </figure>
      <div className="ps-8 pe-12 pb-4 pt-4">
        <h2 className="font-semibold text-xl text-black">{currency}{price} {price_type}</h2>
        <h2 className="font-bold md:text-xl text-xl text-gradient  mb-3">{title}</h2>
        <p className="text-md my-1"><span className="font-bold">Area:</span> {area}</p>
        <div className="flex justify-between">

          <p className="text-md my-1"><span className="font-bold">Country:</span> {country}</p>
          <p className="text-md my-1"><span className="font-bold">State:</span> {state}</p>
        </div>
        <div className="flex justify-between">


          <p className="text-md my-1"><span className="font-bold">Beds:</span> {bed}</p>
          <p className="text-md my-1"><span className="font-bold">Baths:</span> {bath}</p>
          <p className="text-md my-1"><span className="font-bold">Size:</span> {size} {size_unit}</p>

        </div>
      </div>
      <div className="flex justify-end px-6 py-4">
        <Link to={`../items/${sku}`} className="w-full bg-primary btn-gradient px-2 py-3  rounded-md border-none text-white text-center font-bold">Details</Link>
      </div>

    </div>
  );
};

export default SingleProperty;
