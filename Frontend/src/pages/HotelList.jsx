// HotelList.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "./HotelCard"

/* --------------------- SINGLE  H O R I Z O N T A L   C A R D --------------------- */
<HotelCard/>

/* ---------------------------  M A I N   L I S T --------------------------- */
function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  /* fetch once on mount */
  useEffect(() => {
    axios
      .get("https://stayfind-4i8k.onrender.com/api/hotels")
      .then((res) => {
        const list = res.data.properties ?? res.data;
        setHotels(list);
      })
      .catch((err) => console.error("Error fetching hotel data:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="mb-6 text-3xl font-bold">Hotel List</h1>

      {loading ? (
        <p className="animate-pulse text-gray-600">Loading hotels…</p>
      ) : hotels.length === 0 ? (
        <p className="text-gray-600">No hotels available.</p>
      ) : (
        /* vertical stack of full‑width horizontal cards */
        <div className="flex flex-col gap-8">
          {hotels.map((hotel, idx) => (
            <HotelCard key={hotel.property_token || idx} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelList;
