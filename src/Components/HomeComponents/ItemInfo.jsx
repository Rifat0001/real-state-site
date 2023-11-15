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
  const [item, setItem] = useState({});
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

      console.log(res.data)
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



  return (
    <div className=" bg-[#F0F2F5] overflow-hidden pt-5 pb-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">

      <div className=" py-4">
        <div className="pt-2">
          <h2 className=" md:text-4xl text-2xl font-bold">{item.title}</h2>
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

  );
};

export default ItemInfo;
