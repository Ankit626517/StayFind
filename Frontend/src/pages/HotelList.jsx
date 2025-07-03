import { useEffect, useState } from "react";
import axios from "axios";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/hotels");
        setHotels(response.data);
        setFilteredHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchHotels();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let filtered = hotels;

    if (location) {
      filtered = filtered.filter((hotel) =>
        hotel.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // You can add more filtering logic for checkIn and checkOut if your API supports it

    setFilteredHotels(filtered);
  };

  return (
  <>
  
  </>
  );
};

export default HotelList;
