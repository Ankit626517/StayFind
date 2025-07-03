import { useEffect } from "react";
import axios from "axios";

const HotelList = () => {
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hotels");
        console.log("Fetched hotel data:", response.data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <h2>Fetching hotel data... (check console)</h2>
    </div>
  );
};

export default HotelList;
