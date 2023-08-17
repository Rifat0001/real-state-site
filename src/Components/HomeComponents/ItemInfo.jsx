import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './HomeComponents.css'
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
import { useLoaderData, useParams } from "react-router-dom";
import Modal from "react-modal"; // Import the modal library
const ItemInfo = () => {
  const items = useLoaderData();
  console.log(items);
  const { id } = useParams();
  console.log(id);
  const [startDate, setStartDate] = useState(new Date());
  const [item, setItem] = useState({});


  useEffect(() => {
    const itemData = items.find((i) => i.id == id);
    setItem(itemData);
  }, []);

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


  return (
    <div className=" bg-[#F0F2F5] pt-5 pb-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
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
              alt="Selected Slide"
              className="w-full h-full clicky z-80"

            />
          )}

        </Modal>
        {item.slide?.length === 1 && (
          <img
            src={item.slide[0]}
            alt="Property Slide"
            onClick={() => openImageModal(item.slide[0])}
            className="w-full h-[600px] rounded-md shadow"
          />
        )}
        {item.slide?.length === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {item.slide.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`item Slide ${index}`}
                onClick={() => openImageModal(image)}
                className="w-full h-[600px] rounded-md shadow"
              />
            ))}
          </div>
        )}
        {item.slide?.length === 3 && (
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-2 h-full">
            <img
              src={item.slide[0]}
              alt=""
              onClick={() => openImageModal(item.slide[0])}
              className="col-span-2 w-full md:w-[70%] h-auto md:h-[615px] "
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={item.slide[1]}
                alt=""
                className=" h-auto md:h-[250px]"
                onClick={() => openImageModal(item.slide[1])}
              />
              <img
                src={item.slide[2]}
                alt=""
                className="h-auto md:h-[250px]"
                onClick={() => openImageModal(item.slide[2])}
              />
            </div>
          </div>
        )}
        {item.slide?.length >= 4 && (
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-2 h-full">
            <img
              src={item.slide[0]}
              alt=""
              className="col-span-2 w-full md:w-[70%] h-auto md:h-[615px] "
              onClick={() => openImageModal(item.slide[0])}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={item.slide[1]}
                onClick={() => openImageModal(item.slide[1])} alt="" className="h-auto md:h-[200px] " />
              <img src={item.slide[2]} alt="" onClick={() => openImageModal(item.slide[2])}
                className="h-auto md:h-[200px] " />
              <img src={item.slide[3]} alt="" className="h-auto md:h-[200px] "
                onClick={() => openImageModal(item.slide[3])}
              />
            </div>
          </div>
        )}
        {item.slide?.length > 3 && (
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
              {item.slide?.map((imageNumber, index) => (
                <img
                  key={index}
                  src={imageNumber}
                  alt={`item Slide ${index}`}
                  className="w-full h-auto rounded-md shadow mb-2"
                  onClick={() => openImageModal(imageNumber)}
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

      <button className="btn btn-primary mr-2">{item.type}</button>
      <button className="btn btn-accent">{item.status}</button>
      <div className="flex items-center justify-between py-4">
        <div>
          <h2 className=" text-4xl font-bold">{item.title}</h2>
          <p className="font-semibold pt-2">
            {item.city}, {item.state}
          </p>
        </div>
        <div className=" space-y-2">
          <h2 className="text-3xl font-bold text-right">€ {item.price}</h2>
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
                <p>
                  {item.sizes} m<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 px-7 space-y-3 my-5">
            <h2 className="font-bold text-xl">Description</h2>
            <p>{item.description}</p>
          </div>
          <div className="bg-white py-6 px-7 space-y-3 my-5">
            <h2 className="font-bold text-xl pb-5">Address</h2>
            <div className="grid grid-cols-2 items-center justify-between">
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Address:</span> 53 W 88th St
                </p>
                <p>
                  <span className="font-bold">Area:</span> Notre Dame
                </p>
                <p>
                  <span className="font-bold">ZIP:</span> 365448
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  <span className="font-bold">City:</span> {item.city}
                </p>
                <p>
                  <span className="font-bold">State/Country:</span> {item.state}
                </p>
                <p>
                  <span className="font-bold">Country:</span> {item.state}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 px-7 space-y-3 my-5">
            <h2 className="font-bold text-xl pb-5">Details</h2>
            <div className="grid grid-cols-2 items-start justify-between">
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Property Id:</span>
                </p>
                <p>
                  <span className="font-bold">Property Size:</span> {item.sizes}{" "}
                  m<sup>2</sup>
                </p>
                <p>
                  <span className="font-bold">Rooms:</span>
                </p>
                <p>
                  <span className="font-bold">Bathrooms:</span>
                </p>
                <p>
                  <span className="font-bold">Roofing:</span>
                </p>
                <p>
                  <span className="font-bold">Floors No:</span>
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Price:</span> € {item.price}
                </p>
                <p>
                  <span className="font-bold">Property Lot Size:</span>
                </p>
                <p>
                  <span className="font-bold">Bedrooms:</span>
                </p>
                <p>
                  <span className="font-bold">Custom ID:</span>
                </p>
                <p>
                  <span className="font-bold">Structure Type:</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 px-7 space-y-3 my-5">
            <h2 className="font-bold text-xl pb-5">Features</h2>
            <div>
              <div>
                <h1 className="font-bold pb-4">Interior Details</h1>
                <div className="grid grid-cols-2 items-center justify-between ">
                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaUtensils size={15} color="blue" /> Equipped Kitchen
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaVolleyballBall size={15} color="blue" /> Laundry
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaDumbbell size={15} color="blue" /> Gym
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaDesktop size={15} color="blue" /> Media Room
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-6">
                <h1 className="font-bold pb-4">Outdoor Details</h1>
                <div className="grid grid-cols-2 items-start justify-between ">
                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaFan size={15} color="blue" /> Back yard
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaHouseDamage size={15} color="blue" /> Front yard
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaRegCheckCircle size={15} color="blue" /> Hot Bath
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaBasketballBall size={15} color="blue" /> Basketball
                      court
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaParking size={15} color="blue" /> Garage Attached
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaSwimmingPool size={15} color="blue" /> Pool
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-6">
                <h1 className="font-bold pb-4">Utilities</h1>
                <div className="grid grid-cols-2 items-start justify-between ">
                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaRegCheckCircle size={15} color="blue" /> Central Air
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaFireAlt size={15} color="blue" /> Heating
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaHeadSideMask size={15} color="blue" /> Ventilation
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaBolt size={15} color="blue" /> Electricity
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaGasPump size={15} color="blue" /> Natural Gas
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaHandHoldingWater size={15} color="blue" /> Water
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-6">
                <h1 className="font-bold pb-4">Other Features</h1>
                <div className="grid grid-cols-2 items-start justify-between ">
                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaWheelchair size={15} color="blue" /> Chair Accessible
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaHotjar size={15} color="blue" /> Fireplace
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaWifi size={15} color="blue" /> WiFi
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaSkiing size={15} color="blue" /> Elevator
                    </p>
                    <p className="flex items-center justify-start gap-2 font-bold">
                      <FaDharmachakra size={15} color="blue" /> Washer and dryer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                        <label className="label flex items-center justify-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
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
                          className="btn btn-primary"
                        />
                        <div className="flex items-center justify-center gap-2 py-2">
                          <input
                            type="submit"
                            value="Call"
                            className="btn btn-primary w-1/2"
                          />
                          <input
                            type="submit"
                            value="Whatsapp"
                            className="btn btn-primary w-1/2"
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
                    className="btn btn-primary w-1/2"
                  />
                  <input
                    type="submit"
                    value="Video Chat"
                    className="btn btn-primary w-1/2"
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
                        className="btn btn-primary"
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
