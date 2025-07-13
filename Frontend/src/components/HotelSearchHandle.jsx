import { useState } from "react";
import HotelsInIndia from '../pages/HotelsInIndia'
import { FaHotel, FaSearchLocation } from "react-icons/fa";
import axios from "axios";
import {
  MapPinIcon,
  CalendarDaysIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import HotelCard from "../pages/HotelCard";

function HotelSearchHandle() {
  const [formData, setFormData] = useState({
    location: "",
    checkindate: "",
    checkoutdate: "",
    adult: "",
    children: "",
  });

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.get(
        "https://stayfind-4i8k.onrender.com/api/hotels",
        {
          params: {
            location: formData.location,
            checkindate: formData.checkindate,
            checkoutdate: formData.checkoutdate,
            adult: formData.adult,
          },
        }
      );
      const list = response.data.properties ?? response.data;
      const listone = response.data;
      console.log(listone);
      setHotels(list);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Search Form
        // <div 
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
        // }}></div> */}
      <div className=" flex  items-center justify-center   px-4"
      //  style={{
      //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
      //   }}
         >
        <form
          onSubmit={handleSubmit}
          className=" shadow-lg rounded-2xl p-6 md:p-10 w-full  space-y-6"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold  flex justify-center items-center gap-2">
              <FaHotel  className=" text-yellow-300" />
              HotelLux Search
              <FaSearchLocation  className=""/>
            </h2>
            <p className="text-sm font-bold mt-1">
              Explore top-rated hotels at the best prices!
            </p>
          </div>

          <div className="relative">
            <MapPinIcon className="h-5 w-5 absolute top-3.5 left-3" />
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <CalendarDaysIcon className="h-5 w-5  absolute top-3.5 left-3" />
              <input
                type="date"
                name="checkindate"
                className="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.checkindate}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <CalendarDaysIcon className="h-5 w-5 absolute top-3.5 left-3" />
              <input
                type="date"
                name="checkoutdate"
                className="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.checkoutdate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <UserIcon className="h-5 w-5  absolute top-3.5 left-3" />
              <input
                type="number"
                name="adult"
                placeholder="Number of adults"
                className="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.adult}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <UserIcon className="h-5 w-5  absolute top-3.5 left-3" />
              <input
                type="number"
                name="children"
                placeholder="Number of children"
                className="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.children}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600  py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search Hotels
          </button>
        </form>
      </div>

      {/* Result Summary */}

      {/* Hotel Results */}
      <div className="mx-auto  bg-gray-800  py-6">
        <h1 className="mb-6 text-3xl text-center font-bold">Hotel List</h1>

        {loading ? (
          <p className="animate-pulse text-gray-600">Loading hotels…</p>
        ) : hotels.length === 0 ? (
        //  <HotelsInIndia/>
        <h1 className="text-center">Search Hotesl</h1>
        ) : (
          <div className="flex flex-col gap-8">
            {hotels.map((hotel, idx) => (
              <HotelCard key={hotel.property_token || idx} hotel={hotel} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HotelSearchHandle;
