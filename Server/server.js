import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/pin", (req, res) => {
  res.send({ pin: "1234" });
});

// Backend (Node.js + Express)
app.get("/api/hotels", async (_, res) => {
  try {
    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        engine: "google_hotels",
        q: "indore",
        check_in_date: "2025-07-08",
        check_out_date: "2025-07-15",
        adults: "2",
        currency: "INR",
        gl: "us",
        hl: "en",
        api_key: process.env.KEY, // Use the API key from .env
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching hotels data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/hotels`);
});
