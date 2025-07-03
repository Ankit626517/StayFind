import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


// Backend (Node.js + Express)
app.get("/api/hotels", async (req, res) => {
    try {
        const response = await axios.get("https://serpapi.com/search.json", {
            params: {
                engine: "google_hotels",
                q: "delhi hotels",
                check_in_date: "2025-06-30",
                check_out_date: "2025-07-01",
                adults: 4,
                currency: "INR",
                gl: "us",
                hl: "en",
                api_key: process.env.API_KEY
            }
        });
        res.json(response.data);
        
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch hotels data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
