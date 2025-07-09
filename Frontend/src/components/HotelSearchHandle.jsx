
import { useState } from 'react';
import axios from 'axios';
import { MapPinIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/solid';
import HotelCard from '../pages/HotelCard';

function HotelSearchHandle() {
  const [formData, setFormData] = useState({
    location: '',
    checkindate: '',
    checkoutdate: '',
    adult: '',
    children: '',
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
      const response = await axios.get("http://localhost:3000/api/hotels", {
        params: {
          location: formData.location,
          checkindate: formData.checkindate,
          checkoutdate: formData.checkoutdate,
          adult: formData.adult,
        },
      });
      const list = response.data.properties ?? response.data;
      setHotels(list);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Search Form */}
      <div className="bg-gray-100 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-2xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">Hotel Search</h2>

          <div className="relative">
            <MapPinIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
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
              <CalendarDaysIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
              <input
                type="date"
                name="checkindate"
                className="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.checkindate}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <CalendarDaysIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
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
              <UserIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
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
              <UserIcon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
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
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search Hotels
          </button>
        </form>
      </div>

      {/* Result Summary */}
    

      {/* Hotel Results */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="mb-6 text-3xl font-bold">Hotel List</h1>

        {loading ? (
          <p className="animate-pulse text-gray-600">Loading hotels…</p>
        ) : hotels.length === 0 ? (
          <p className="text-gray-600">No hotels available.</p>
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
