import { useState } from 'react';
import { MapPinIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/solid';

const SearchBar = () => {
  const [formData, setFormData] = useState({
    location: '',
    checkindate: '',
    chechoutdate: '',
    adult: '',
    children: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      location: '',
      checkindate: '',
      chechoutdate: '',
      adult: '',
      children: '',
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-2xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">Hotel Search</h2>

          {/* Location */}
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

          {/* Dates */}
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
                name="chechoutdate"
                className="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.chechoutdate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Adults & Children */}
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

      {/* Display Data */}
      {submittedData && (
        <div className="max-w-2xl mx-auto mt-8 bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-4">Search Summary</h3>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Check-in</th>
                <th className="border px-4 py-2">Check-out</th>
                <th className="border px-4 py-2">Adults</th>
                <th className="border px-4 py-2">Children</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{submittedData.location}</td>
                <td className="border px-4 py-2">{submittedData.checkindate}</td>
                <td className="border px-4 py-2">{submittedData.chechoutdate}</td>
                <td className="border px-4 py-2">{submittedData.adult}</td>
                <td className="border px-4 py-2">{submittedData.children}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SearchBar;

