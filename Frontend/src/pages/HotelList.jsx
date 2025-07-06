// 

import { useEffect, useState } from "react";
import axios from "axios";

/* ---------------- SINGLE HOTEL CARD ---------------- */
const HotelCard = ({ hotel }) => {

  const {
    name,
    images,
    overall_rating,
    location_rating,
    rate_per_night,
    total_rate,
    check_in_time,
    check_out_time,
    amenities = [],
    essential_info = [],
    reviews,
    link,
    type,
  } = hotel;


  const imgUrl =
    images?.[0]?.thumbnail ||
    images?.[0]?.original_image ||
    "https://via.placeholder.com/400x300?text=No+Image";

  /* nightly lowest price  */
  const nightPrice = rate_per_night?.lowest
    ? `$${rate_per_night.lowest}`
    : "N/A";

  /* total stay lowest price (extracted_before_taxes_fees)  */
  const totalStay = total_rate?.lowest
    ? `$${total_rate.lowest}`
    : "—";

  return (
    <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow">
      {/* Hotel photo */}
      <img
        src={imgUrl}
        alt={name}
        className="h-48 w-full object-cover object-center"
      />

      {/* Content */}
      <div className="p-4 flex-grow flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>

        {/* Ratings & Type */}
        <div className="flex items-center text-sm gap-4">
          <span>⭐ {overall_rating ?? "—"} / 5</span>
          <span>📍 {location_rating ?? "—"} / 5</span>
          {type && <span className="ml-auto italic">{type}</span>}
        </div>

        {/* Timing */}
        <p className="text-sm text-gray-600">
          ⏰ Check‑in <strong>{check_in_time || "--"}</strong> | Check‑out{" "}
          <strong>{check_out_time || "--"}</strong>
        </p>

        {/* Prices */}
        <p className="text-sm">
          💰 <strong>{nightPrice}</strong> / night &nbsp;|&nbsp; From{" "}
          <strong>{totalStay}</strong> total
        </p>

        {/* Short amenity + info chips */}
        <div className="flex flex-wrap gap-2 mt-1">
          {amenities.slice(0, 4).map((a, i) => (
            <span
              key={i}
              className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs"
            >
              {a}
            </span>
          ))}
          {amenities.length > 4 && (
            <span className="text-xs text-gray-500">+{amenities.length - 4}</span>
          )}
        </div>

        {/* Essential info */}
        {essential_info.length > 0 && (
          <p className="text-xs text-gray-700 mt-1">
            {essential_info.join(" • ")}
          </p>
        )}

        {/* Reviews */}
        <p className="text-xs text-gray-600 mt-auto">
          🗨️ {reviews ?? 0} reviews
        </p>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          View deal
        </a>
      </div>
    </div>
  );
};

/* ---------------- MAIN LIST ---------------- */
const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/hotels");

        /* आपकी कंसोल इमेज के हिसाब से डेटा res.data.properties में है */
        setHotels(res.data.properties ?? []);
      } catch (err) {
        console.error("Error fetching hotel data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Hotel List</h1>

      {loading ? (
        <p className="animate-pulse text-gray-600">Loading hotels…</p>
      ) : hotels.length === 0 ? (
        <p className="text-gray-600">No hotels available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel, idx) => (
            <HotelCard key={hotel.property_token || idx} hotel={hotel} />
          ))}
        </div>
      )}
    </>
  );
};

export default HotelList;
