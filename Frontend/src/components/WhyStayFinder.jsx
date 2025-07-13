import React from "react";
import { FaMapMarkerAlt, FaUserFriends, FaCalendarAlt } from "react-icons/fa";

function WhyStayFinder() {
  const features = [
    {
      icon: <FaMapMarkerAlt size={30} color="#2563EB" />,
      title: "Prime Locations",
      description:
        "Strategically located hotels in the heart of major cities and destinations",
    },
    {
      icon: <FaUserFriends size={30} color="#2563EB" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to ensure your perfect stay",
    },
    {
      icon: <FaCalendarAlt size={30} color="#2563EB" />,
      title: "Best Rates",
      description:
        "Guaranteed lowest prices with flexible booking and cancellation",
    },
  ];

  return (
    <div className="text-center py-12 bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Why Choose HotelLux?
      </h2>
      <p className="text-gray-600 mb-10">
        Experience luxury, comfort, and exceptional service at every stay
      </p>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyStayFinder;
