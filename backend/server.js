const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dns = require("dns");

dotenv.config();

dns.setDefaultResultOrder("ipv4first");

const app = express();

const contactRoutes = require("./routes/contactroutes");

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://apdigital.netlify.app", // Apna frontend URL
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.status(200).send("🚀 AP Solutions Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});