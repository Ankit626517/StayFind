import { useState } from "react";
import axios from "axios";
import HotelCard from "../pages/HotelCard";
import {
  MapPinIcon,
  CalendarDaysIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import FullHotelDetails from "../pages/FullHotelDetails";

function HotelSearchHandle() {
  const [formData, setFormData] = useState({
    location: "",
    checkindate: "",
    checkoutdate: "",
    adult: 1,
    children: 0,
  });
 const [selectedHotel, setSelectedHotel] = useState(null);
  const [guestMenuOpen, setGuestMenuOpen] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateGuests = (type, action) => {
    setFormData((prev) => {
      let value = prev[type];
      if (action === "inc") value++;
      if (action === "dec" && value > 0) value--;
      return { ...prev, [type]: value };
    });
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
            children: formData.children,
          },
        }
      );
      const list = response.data.properties ?? response.data;
      setHotels(list);
      console.log(list)
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Airbnb-style Search Bar */}
      <div className="flex items-center justify-center px-4 py-8 bg-white border-b border-gray-100">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:items-center md:divide-x md:divide-gray-200 
                     bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-5xl"
        >
          {/* Location */}
          <div className="flex items-center px-5 py-3 w-full md:w-auto">
            <MapPinIcon className="h-5 w-5 text-gray-500 mr-3" />
            <input
              type="text"
              name="location"
              placeholder="Where to?"
              className="w-full outline-none text-sm placeholder-gray-400"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Check-in */}
          <div className="flex items-center px-5 py-3 w-full md:w-auto">
            <CalendarDaysIcon className="h-5 w-5 text-gray-500 mr-3" />
            <input
              type="date"
              name="checkindate"
              className="w-full outline-none text-sm text-gray-700"
              value={formData.checkindate}
              onChange={handleChange}
            />
          </div>

          {/* Check-out */}
          <div className="flex items-center px-5 py-3 w-full md:w-auto">
            <CalendarDaysIcon className="h-5 w-5 text-gray-500 mr-3" />
            <input
              type="date"
              name="checkoutdate"
              className="w-full outline-none text-sm text-gray-700"
              value={formData.checkoutdate}
              onChange={handleChange}
            />
          </div>

          {/* Guests */}
          <div
            className="relative flex items-center px-5 py-3 w-full md:w-auto cursor-pointer"
            onClick={() => setGuestMenuOpen((prev) => !prev)}
          >
            <UserIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span className="text-sm text-gray-700">
              {formData.adult} Adults · {formData.children} Children
            </span>

            {/* Dropdown */}
            {guestMenuOpen && (
              <div className="absolute top-14 left-0 bg-white shadow-lg rounded-xl p-4 w-60 z-50">
                {/* Adults */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm">Adults</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-2 py-1 border rounded-full hover:bg-gray-100"
                      onClick={() => updateGuests("adult", "dec")}
                    >
                      -
                    </button>
                    <span>{formData.adult}</span>
                    <button
                      type="button"
                      className="px-2 py-1 border rounded-full hover:bg-gray-100"
                      onClick={() => updateGuests("adult", "inc")}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <span className="text-sm">Children</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-2 py-1 border rounded-full hover:bg-gray-100"
                      onClick={() => updateGuests("children", "dec")}
                    >
                      -
                    </button>
                    <span>{formData.children}</span>
                    <button
                      type="button"
                      className="px-2 py-1 border rounded-full hover:bg-gray-100"
                      onClick={() => updateGuests("children", "inc")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <div className="px-5 py-3">
            <button
              type="submit"
              className="bg-[#EA580C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#d44f0b] transition"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Results */}
      <div className="mx-auto bg-[#111827] py-8">
        <h1 className="mb-6 text-3xl text-center font-bold text-white">
          Hotel List
        </h1>
        {loading ? (
          <p className="text-center text-gray-300 animate-pulse">
            Loading hotels…
          </p>
        ) : hotels.length === 0 ? (
          <h1 className="text-center text-gray-400">Search Hotels</h1>
        ) : (
          // <div className="flex flex-col gap-8">
          //   {hotels.map((hotel, idx) => (
          //     <HotelCard key={hotel.property_token || idx} hotel={hotel} />
          //   ))}
          // </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel, idx) => (
          <HotelCard
            key={hotel.property_token || idx}
            hotel={hotel}
            onSelect={setSelectedHotel}
          />
        ))}
      
      {/* Full Details Modal */}
      {selectedHotel && (
        <FullHotelDetails
          hotel={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </div>
        )}
      </div>
    </>
  );
}

export default HotelSearchHandle;
