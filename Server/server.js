import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Backend (Node.js + Express)
app.get("/api/hotels", async (req, res) => {
  const { location, checkindate, checkoutdate, adult } = req.query;

  // 👇 Print data to console
  console.log("Received from frontend:");
  console.log("Location:", location);
  console.log("Check-in:", checkindate);
  console.log("Check-out:", checkoutdate);
  console.log("Adults:", adult);

  try {
    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        engine: "google_hotels",
        q: location,

        check_in_date: checkindate,

        check_out_date: checkoutdate,
        adults: adult,
        currency: "INR",
        gl: "us",
        hl: "en",
        api_key: process.env.KEY, // Use the API key from .env
      },
    });
    res.json(response.data);
    console.log(response.data)
    
    
  } catch (error) {
    res.status(500).json({ error: "Error fetching hotels data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/hotels`);
  
});
