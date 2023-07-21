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
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
