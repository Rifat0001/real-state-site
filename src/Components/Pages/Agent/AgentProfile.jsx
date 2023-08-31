import {
  FaEnvelope,
  FaEnvelopeSquare,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterestP,
  FaSkype,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const AgentProfile = () => {
  return (
    <div className="max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black bg-[#F8F8F8]">
      <div>
        <h2 className="text-5xl font-bold text-black text-center">Map Here</h2>
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 items-start justify-between gap-5">
          <div className="bg-white shadow-xl rounded col-span-2 p-5">
            <div className="grid grid-cols-2 items-start justify-between gap-5">
              <div className="flex flex-col items-center">
                <img
                  src="https://pariswpresidence.b-cdn.net/wp-content/uploads/2018/06/person3-500x328.jpg"
                  alt=""
                />
                <div className="flex items-center justify-center gap-4 bg-[#fffff9] py-2 px-4 shadow-xl -mt-6">
                  <FaFacebookF></FaFacebookF> | <FaTwitter></FaTwitter> |{" "}
                  <FaLinkedinIn></FaLinkedinIn> | <FaPinterestP></FaPinterestP>
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="font-bold text-2xl">Michael Suttherland</h1>
                <p className="font-semibold">real estate broker</p>
                <div className="flex items-center justify-start gap-3">
                  <FaPhoneAlt></FaPhoneAlt> <span>(305) 555-4555</span>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <FaEnvelope></FaEnvelope> <span>(305) 555-4555</span>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <FaEnvelopeSquare></FaEnvelopeSquare>{" "}
                  <span>michael@wpresidence.net</span>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <FaSkype></FaSkype> <span>michael.suttherland</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-normal gap-5 py-5">
              <button className="btn">Send Email</button>
              <button className="btn">
                <FaPhoneAlt></FaPhoneAlt> Call (305)555-4555
              </button>
              <button className="btn">
                <FaWhatsapp></FaWhatsapp> Whatsapp
              </button>
              <button className="btn">See All Property</button>
            </div>
            <div>
              <h2 className="font-bold text-2xl">
                Specialties & Service Areas
              </h2>
              <div className="flex flex-wrap items-center justify-normal gap-5 py-5">
                <button className="btn rounded-full">New York State</button>
                <button className="btn rounded-full">New York State</button>
                <button className="btn rounded-full">New York State</button>
                <button className="btn rounded-full">New York State</button>
              </div>
            </div>
            <div className=" py-8 space-y-4">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p>
                Michael’s sociability, independent spirit, and incredible
                customer service set him apart as a top agent in the New York
                real estate market. He works with a range of clients – national
                and international, as well as investors and local residents.
              </p>
              <p>
                Whether a client is in the market for a single-family home or a
                luxury penthouse, Michael is there to help out. Between his time
                in the hospitality and real estate industries, he knows what
                good service is all about.
              </p>
            </div>
            <div className=" space-y-4 form-control">
              <h2 className="text-2xl font-bold">Contact Me</h2>
              <div className="flex items-center justify-normal gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="textarea textarea-bordered w-full my-2"
              ></textarea>
              <div className="">
                <label className="cursor-pointer label flex items-center justify-start gap-4">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text">
                    I consent to the GDPR Terms
                  </span>
                </label>
              </div>
              <button className="btn">Send Email</button>
            </div>
          </div>
          <div>
            <div className=" bg-white text-black shadow-lg rounded py-8 px-5">
              <h1 className="font-bold text-2xl">Advanced Search</h1>
              <div className="flex flex-col items-center justify-between space-y-4">
                <input
                  type="text"
                  placeholder="Type address, city, state or area"
                  className="input input-bordered w-full max-w-xs"
                />
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Types
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Categories
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Bedrooms
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Min. Baths
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Stories Number
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <input
                  type="text"
                  placeholder="Min. Size"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Year Built"
                  className="input input-bordered w-full max-w-xs"
                />
                <h2>Price range: € 0 to € 1,500,000</h2>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value="40"
                  className="range"
                />
                <p>More Search Options</p>
                <button className="btn w-full">Search</button>
              </div>
            </div>
            <div className=" bg-white text-black shadow-lg rounded py-8 px-5 mt-5">
              <h1 className="font-bold text-2xl">Mortgage Calculator</h1>
              <div className="flex flex-col items-center justify-between space-y-4">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-black">Sale Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="100000"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text text-black">Percent Down</span>
                  </label>
                  <input
                    type="text"
                    placeholder="10"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text text-black">Term (Year)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="30"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text text-black">Interest Rate in %</span>
                  </label>
                  <input
                    type="text"
                    placeholder="5"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                
                <button className="btn w-full">Calculate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
