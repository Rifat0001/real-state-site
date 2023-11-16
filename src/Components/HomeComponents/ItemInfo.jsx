import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SingleDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
import "react-tabs/style/react-tabs.css";
import './HomeComponents.css'
import { useMediaQuery } from "react-responsive";
import {
  FaBasketballBall,
  FaBath,
  FaBed,
  FaBolt,
  FaDesktop,
  FaDharmachakra,
  FaDumbbell,
  FaFan,
  FaFireAlt,
  FaGasPump,
  FaHandHoldingWater,
  FaHeadSideMask,
  FaHeart,
  FaHotjar,
  FaHouseDamage,
  FaParking,
  FaPrint,
  FaQrcode,
  FaRegCheckCircle,
  FaShareAlt,
  FaSkiing,
  FaSwimmingPool,
  FaUtensils,
  FaVolleyballBall,
  FaWheelchair,
  FaWifi,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Modal from "react-modal"; // Import the modal library
import MobileImg from "./MobileImg";
import axios from "axios";
import { setItem } from "localforage";
const ItemInfo = () => {
  // const items = useLoaderData();
  // // console.log(items);
  // const { id } = useParams();
  // console.log(id);
  const params = useParams();
  const id = params.id;
  console.log(id)

  const [startDate, setStartDate] = useState(new Date());
  const [item, setItem] = useState(null);
  // const item = false;
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // axios 
  const loadAxios = async (id) => {
    console.log('my id is', id)
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/property/${id}`, config, { withCredentials: true });

      console.log(res.data.images[0].image)
      setItem(res.data)
    }
    catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    loadAxios(id)

  }, [])

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };



  return item && (
    <div className=" bg-[#F0F2F5] overflow-hidden pt-5 pb-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
      <div className="pb-5">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeImageModal}
          contentLabel="Image Modal"
          ariaHideApp={false}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected images"
              className="w-full h-full  z-80"
            />
          )}

        </Modal>
        {item.images?.length === 1 && (
          // Render the grid for larger screens
          <div className="grid grid-cols-1  gap-2">
            {item.images.map((image, index) => (
              <img
                key={index}
                src={`${import.meta.env.VITE_APP_API_URL}/${image.image}`}
                alt={`item  ${index}`}
                onClick={() => openImageModal(image.image)}
                className="w-full h-[600px] rounded-md shadow"
              />
            ))}
          </div>

        )}
        {item.images?.length === 2 && (
          isMobile ? (
            // Render the imagesr for mobile screens
            <MobileImg images={item.images} />
          ) : (
            // Render the grid for larger screens
            <div className="grid grid-cols-2 gap-2">
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={`${import.meta.env.VITE_APP_API_URL}/${image.image}`}
                  alt={`item images ${index}`}
                  onClick={() => openImageModal(image.image)}
                  className="w-full h-[600px] rounded-md shadow"
                />
              ))}
            </div>
          )
        )}
        {item.images?.length === 3 && (
          isMobile ? (
            // Render the imagesr for mobile screens
            <MobileImg images={item.images} />

          ) : (
            // Render the grid for larger screens
            <div className="flex  items-center md:items-start justify-center gap-2 h-full">
              <img
                src={`${import.meta.env.VITE_APP_API_URL}/${item.images[0].image}`}
                alt=""
                onClick={() => openImageModal(item.images[0])}
                className="col-span-2 w-full md:w-[70%] h-auto md:h-[615px] "
              />
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src={`${import.meta.env.VITE_APP_API_URL}/${item.images[1].image}`}
                  alt=""
                  className=" h-auto w-full md:h-[250px]"
                  onClick={() => openImageModal(item.images[1])}
                />
                <img
                  src={`${import.meta.env.VITE_APP_API_URL}/${item.images[2].image}`}
                  alt=""
                  className="h-auto w-full md:h-[250px]"
                  onClick={() => openImageModal(item.images[2])}
                />
              </div>
            </div>
          )
        )}
        {item.images?.length >= 4 && (
          isMobile ? (
            // Render the imagesr for mobile screens
            <MobileImg images={item.images} />
          ) : (
            // Render the grid for larger screens
            <div className="flex  items-center md:items-start justify-center gap-2 h-full">
              <img
                src={`${import.meta.env.VITE_APP_API_URL}/${item.images[0].image}`}
                alt=""
                className="col-span-2 w-full md:w-[70%] h-auto md:h-[615px] "
                onClick={() => openImageModal(item.images[0])}
              />
              <div className="flex flex-col items-center justify-center gap-2">
                <img src={`${import.meta.env.VITE_APP_API_URL}/${item.images[1].image}`}
                  onClick={() => openImageModal(item.images[1])} alt="" className="h-auto w-full md:h-[200px] " />
                <img
                  src={`${import.meta.env.VITE_APP_API_URL}/${item.images[2].image}`}
                  alt="" onClick={() => openImageModal(item.images[2])}
                  className="h-auto w-full md:h-[200px] " />
                <img
                  src={`${import.meta.env.VITE_APP_API_URL}/${item.images[3].image}`}
                  alt="" className="h-auto w-full md:h-[200px] "
                  onClick={() => openImageModal(item.images[3])}
                />
              </div>
            </div>
          )
        )}
        {item.images?.length > 4 && (
          <button
            className="btn bg-gray-100 text-black hover:text-white my-5"
            onClick={() => window.my_modal_4.showModal()} // Open the modal on button click
          >
            More Image
          </button>
        )}
        <dialog id="my_modal_4" className="modal blicky">
          <form method="dialog" className="modal-box bg-white w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Photos</h3>
            {/* <p className="py-4">Click the button below to close</p> */}
            <div className="py-4 grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-5">
              {item.images?.map((image, index) => (
                <img
                  key={index}
                  src={`${import.meta.env.VITE_APP_API_URL}/${image.image}`}
                  alt={`item images ${index}`}
                  className="w-full h-auto rounded-md shadow mb-2"
                  onClick={() => openImageModal(image)}
                />
              ))}
            </div>
            <div className="modal-action">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
      <div className=" py-4">
        <div className="pt-2">
          <h2 className=" md:text-4xl text-2xl font-bold">{item.title}</h2>
          <h2 className="md:text-3xl text-xl font-bold ">{item.price_unit} {item.price}{item.price_type}</h2>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start  justify-between space-y-2">
          <p className="font-semibold pt-2 md:mb-0 mb-4">

          </p>
          <div className="flex items-center justify-end gap-4">
            <button className="btn bg-white border-none hover:bg-white text-black">
              <FaShareAlt /> Share
            </button>
            <button className="btn bg-white border-none hover:bg-white text-black">
              <FaHeart /> Favorite
            </button>
            <button className="btn bg-white border-none hover:bg-white text-black">
              <FaPrint /> Print
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start justify-center">
        <div className=" col-span-2">
          <div className="bg-white py-6 px-7 space-y-3">
            <h2 className="font-bold text-xl">Overview</h2>
            <div className="">
              <p>
                <span className="font-bold">Post Type:</span> {item.post_type}
              </p>
              <p>
                <span className="font-bold">Property Category:</span> {item.property_category}
              </p>
              <p>
                <span className="font-bold">Property Status:</span> {item.property_status}
              </p>
            </div>

          </div>
          <div className="bg-white mt-4 py-6 px-7 space-y-3">
            <h2 className="font-bold text-xl">Overview</h2>
            <div className="mb-2">
              <h2 className="font-bold">Available From:</h2>
              <p className="text-sm">{item.details.available_from}
              </p>
            </div>
            <div className="flex  pt-2 gap-6 md:gap-10">
              <div className="flex flex-col items-center justify-center font-bold">
                <FaBed />
                <p>{item.details.bed} </p>
                <p className="flex text-sm">Bedrooms</p>
              </div>
              <div className="flex flex-col items-center justify-center font-bold">
                <FaBath />
                <p>{item.details.bath} </p>
                <p>Bathrooms</p>
              </div>
              <div className="flex flex-col items-center justify-center font-bold">
                <FaQrcode />
                <p>
                  {item.details.size} {item.details.size_unit}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 px-7 space-y-3 my-5">
            <h2 className="font-bold text-xl">Description</h2>
            <p>{item.desc}</p>
          </div>
          <div className="bg-white py-6 px-7 space-y-3 my-5">
            <h2 className="font-bold text-xl pb-5">Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
              <div className="space-y-3">

                <p>
                  <span className="font-bold">Area:</span> {item.loc}
                </p>
                <p>
                  <span className="font-bold">House No:</span> {item.address.house}
                </p>
                <p>
                  <span className="font-bold">Street:</span> {item.address.street}
                </p>
                <p>
                  <span className="font-bold">City:</span> {item.address.city}
                </p>
                <p>
                  <span className="font-bold">State:</span> {item.address.state}
                </p>
                <p>
                  <span className="font-bold">Country:</span> {item.address.country}
                </p>
                <p>
                  <span className="font-bold">ZIP:</span> {item.address.zip}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 px-7 space-y-3 my-5">
            <h2 className="font-bold text-xl pb-5">Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between">
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Property Id:</span> {item.id}
                </p>
                <p>
                  <span className="font-bold">Property Size:</span> {item.details.size} {item.details.size_unit}
                </p>
                <p>
                  <span className="font-bold">Bedrooms:</span> {item.details.bed}
                </p>
                <p>
                  <span className="font-bold">Bathrooms:</span> {item.details.bath}
                </p>
                <p>
                  <span className="font-bold">Floors No:</span> {item.details.floor}
                </p>
                <p>
                  <span className="font-bold">Built Year:</span> {item.details.built}
                </p>
                <p>
                  <span className="font-bold">Garages:</span> {item.details.garage}
                </p>
                <p>
                  <span className="font-bold">Garage Size:</span> {item.details.garage_size} {item.details.size_unit}
                </p>
                <p>
                  <span className="font-bold">Floors No:</span> {item.details.floor}
                </p>
                <p>
                  <span className="font-bold">Custom ID:</span> {item.details.cid}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="bg-white py-6 px-7 space-y-3 my-5">
  <h2 className="font-bold text-xl pb-5">Features</h2>
  <div>
    <div>
      <h1 className="font-bold pb-4">Interior Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between ">
        <div className="space-y-3">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaUtensils className="text-[#0E8E94]" /> Equipped Kitchen
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaVolleyballBall className="text-[#0E8E94]" /> Laundry
          </p>
        </div>
        <div className="space-y-3">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaDumbbell className="text-[#0E8E94]" /> Gym
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaDesktop className="text-[#0E8E94]" /> Media Room
          </p>
        </div>
      </div>
    </div>
    <div className="py-6">
      <h1 className="font-bold pb-4">Outdoor Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between ">
        <div className="space-y-3">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaFan className="text-[#0E8E94]" /> Back yard
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaHouseDamage className="text-[#0E8E94]" /> Front yard
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaRegCheckCircle className="text-[#0E8E94]" /> Hot Bath
          </p>
        </div>
        <div className="space-y-3">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaBasketballBall className="text-[#0E8E94]" /> Basketball
            court
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaParking className="text-[#0E8E94]" /> Garage Attached
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaSwimmingPool className="text-[#0E8E94]" /> Pool
          </p>
        </div>
      </div>
    </div>
    <div className="py-6">
      <h1 className="font-bold pb-4">Utilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between ">
        <div className="space-y-3">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaRegCheckCircle className="text-[#0E8E94]" /> Central Air
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaFireAlt className="text-[#0E8E94]" /> Heating
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaHeadSideMask className="text-[#0E8E94]" /> Ventilation
          </p>
        </div>
        <div className="space-y-3">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaBolt className="text-[#0E8E94]" /> Electricity
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaGasPump className="text-[#0E8E94]" /> Natural Gas
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaHandHoldingWater className="text-[#0E8E94]" /> Water
          </p>
        </div>
      </div>
    </div>
    <div className="py-6">
      <h1 className="font-bold pb-4">Other Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between ">
        <div className="space-y-3">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaWheelchair className="text-[#0E8E94]" /> Chair Accessible
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaHotjar className="text-[#0E8E94]" /> Fireplace
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaWifi className="text-[#0E8E94]" /> WiFi
          </p>
        </div>
        <div className="space-y-3">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaSkiing className="text-[#0E8E94]" /> Elevator
          </p>
          <p className="flex items-center justify-start gap-2 font-bold">
            <FaDharmachakra className="text-[#0E8E94]" /> Washer and dryer
          </p>
        </div>
      </div>
    </div>
  </div>
</div> */}
          <div className="bg-white py-6 px-7 space-y-3 my-5">
            <h2 className="font-bold text-xl">Video</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full"
                height={315}
                src="https://www.youtube.com/embed/rzsdHX4xAc4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="bg-white w-full sticky">
          <Tabs>
            <TabList className="text-center py-2">
              <Tab>Request Info</Tab>
              <Tab>Schedule A Tour</Tab>
            </TabList>

            <TabPanel>
              <div>
                <div className="flex items-center justify-center gap-7 py-3">
                  <img
                    className=" w-[130px] rounded-md"
                    src="https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg"
                    alt=""
                  />
                  <div>
                    <h2 className="font-bold">Maria Barlow</h2>
                    <p>Sales Executive</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="card-body">
                      <div className="form-control">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="input input-bordered shadow"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="input input-bordered shadow"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="phone"
                          placeholder="Your Phone"
                          className="input input-bordered shadow"
                        />
                      </div>
                      <div className="form-control">
                        <textarea
                          name="message"
                          cols="10"
                          rows="20"
                          className="input input-bordered shadow pt-2"
                          placeholder="I'm interested in [ Villa On Washington Ave ]"
                        ></textarea>
                      </div>
                      <div className="form-control mt-6">

                        <input
                          type="submit"
                          value="Send Email"
                          className="btn btn-gradient"
                        />
                        <div className="flex items-center justify-center gap-2 py-2">
                          <input
                            type="submit"
                            value="Call"
                            className="btn btn-gradient w-1/2"
                          />
                          <input
                            type="submit"
                            value="Whatsapp"
                            className="btn btn-gradient w-1/2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="px-[10%] py-4">
                  <h2 className="text-xl font-bold">Schedule a tour</h2>
                  <DatePicker
                    className="w-full z-10"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                {/* npm install react-google-flight-datepicker */}


                <SingleDatePicker

                  startDate={new Date()}
                  onChange={(startDate) => onDateChange(startDate)}
                  minDate={new Date(1900, 0, 1)}
                  maxDate={new Date(2100, 0, 1)}
                  dateFormat="D"
                  monthFormat="MMM YYYY"
                  startDatePlaceholder="Date"
                  disabled={false}
                  className="my-own-class-name "
                  startWeekDay="monday"
                />


                {/* end npm install react-google-flight-datepicker */}
                <select className="select select-secondary w-full max-w-xs text-center mx-[10%]">
                  <option disabled selected>
                    Please Select The Time
                  </option>
                  <option>Java</option>
                  <option>Go</option>
                  <option>C</option>
                  <option>C#</option>
                  <option>C++</option>
                  <option>Rust</option>
                  <option>JavaScript</option>
                  <option>Python</option>
                </select>
                <div className="flex items-center justify-center gap-2 py-2 px-[10%]">
                  <input
                    type="submit"
                    value="In Person"
                    className="btn btn-gradient w-1/2"
                  />
                  <input
                    type="submit"
                    value="Video Chat"
                    className="btn btn-gradient w-1/2"
                  />
                </div>
                <div>
                  <div className="card-body">
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered shadow"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="input input-bordered shadow"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="phone"
                        placeholder="Your Phone"
                        className="input input-bordered shadow"
                      />
                    </div>
                    <div className="form-control">
                      <textarea
                        name="message"
                        cols="10"
                        rows="20"
                        className="input input-bordered shadow pt-2"
                        placeholder="I'm interested in [ Villa On Washington Ave ]"
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <label className="label flex items-center justify-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked="checked"
                          className="checkbox"
                        />
                        <span className="label-text font-bold">
                          {" "}
                          I consent to the GDPR Terms
                        </span>
                      </label>
                      <input
                        type="submit"
                        value="Send Email"
                        className="btn btn-gradient"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>

  );
};

export default ItemInfo;
