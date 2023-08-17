import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProperty = ({ singleCard }) => {
  const {
    title,
    image,
    type,
    status,
    price,
    description,
    beds,
    baths,
    sizes,
    area,
    id,
  } = singleCard || null;
  return (
    <div className="card w-full h-full bg-white shadow-xl rounded-md">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-medium text-xl">€ {price} / month</h2>
        <h2 className="font-bold text-xl  ">{title}</h2>
        <p>{description}</p>
        <div className="flex items-center justify-between pb-3">
          <p>Beds: {beds}</p>
          <p>Baths: {baths}</p>
          <p>Area: {area}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <FaUserCircle /> <span className="font-bold">Michael Suttherland</span>
          </div>
          <Link to={`../items/${id}`}><button className=" bg-primary px-2 py-1 rounded-md text-white font-bold">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
