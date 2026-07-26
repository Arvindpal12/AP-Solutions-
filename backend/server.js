// // const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const mongoose = require('mongoose');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// const contactRoutes = require('./routes/contactroutes');
// app.use('/api', contactRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const mongoose = require('mongoose');

// const app = express();
//  app.use(cors());
// // app.use(cors({
// //   origin: ['http://localhost:5173', 'https://YOUR-ACTUAL-NETLIFY-URL.netlify.app'],
// //   credentials: true
// // }));
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// const contactRoutes = require('./routes/contactroutes');
// app.use('/api', contactRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const mongoose = require('mongoose');

// const app = express();

// // Sabse Simple aur Working CORS
// app.use(cors({
//   origin: '*',           // Sab allow (temporary testing)
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// app.use(express.json({ limit: '10mb' }));

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ MongoDB Connected'))
//   .catch(err => console.error('❌ MongoDB Error:', err));

// const contactRoutes = require('./routes/contactroutes');
// app.use('/api', contactRoutes);

// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log('✅ CORS: origin * (All allowed)');
// });


const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// CORS setup
// NOTE: origin '*' + credentials:true is invalid together (browser rejects it).
// Use one of the two options below depending on your need:

// Option A — testing / no cookies-auth needed (simplest, matches your logs)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Option B — production with specific frontend + credentials (cookies/auth headers)
// Uncomment this and remove Option A once you have your real Netlify URL:
// app.use(cors({
//   origin: ['http://localhost:5173', 'https://YOUR-ACTUAL-NETLIFY-URL.netlify.app'],
//   credentials: true,
// }));

app.use(express.json({ limit: '10mb' }));

// ✅ Root route — UptimeRobot isi ko ping karta hai
// Isse "404" status hatega, server "Up" dikhega aur warm rahega
app.get('/', (req, res) => {
  res.status(200).send('Server is running ✅');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Error:', err));

const contactRoutes = require('./routes/contactroutes');
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log('✅ CORS configured');
});


// // const express = require('express');
// // const cors = require('cors');
// // require('dotenv').config();
// // const mongoose = require('mongoose');

// // const app = express();

// // // CORS - Sab allow (Temporary - Testing ke liye)
// // app.use(cors({
// //   origin: '*',                    
// //   methods: ['GET', 'POST', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true
// // }));

// // // Body Parser
// // app.use(express.json({ limit: '10mb' }));
// // app.use(express.urlencoded({ extended: true }));

// // // MongoDB Connection
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log('✅ MongoDB Connected'))
// //   .catch(err => {
// //     console.error('❌ MongoDB Error:', err);
// //     process.exit(1);
// //   });

// // // Routes
// // const contactRoutes = require('./routes/contactroutes');
// // app.use('/api', contactRoutes);

// // // 404 Handler
// // app.use((req, res) => {
// //   res.status(404).json({ success: false, message: 'Route not found' });
// // });

// // // Global Error Handler
// // app.use((err, req, res, next) => {
// //   console.error('Server Error:', err);
// //   res.status(500).json({ success: false, message: 'Something went wrong' });
// // });

// // const PORT = process.env.PORT || 10000;
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on port ${PORT}`);
// //   console.log('✅ CORS: origin * (All origins allowed for testing)');
// // });
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// // ===============================
// // CORS Configuration
// // ===============================
// const allowedOrigins = [
//   process.env.FRONTEND_URL,
//   "http://localhost:5173",
//   "http://localhost:5174",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("CORS Not Allowed"));
//       }
//     },
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// // ===============================
// // Body Parser
// // ===============================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ===============================
// // MongoDB Connection (Optimized Options)
// // ===============================
// mongoose
//   .connect(process.env.MONGO_URI, {
//     serverSelectionTimeoutMS: 5000, // Fast connection timeout
//   })
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => {
//     console.error("❌ MongoDB Error:", err.message);
//     process.exit(1);
//   });

// // ===============================
// // Health Check
// // ===============================
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "AP Solutions Backend Running Successfully 🚀",
//   });
// });

// // ===============================
// // Routes
// // ===============================
// const contactRoutes = require("./routes/contactroutes");

// app.use("/api", contactRoutes);

// // ===============================
// // 404
// // ===============================
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route Not Found",
//   });
// });

// // ===============================
// // Global Error Handler
// // ===============================
// app.use((err, req, res, next) => {
//   console.error("❌ Server Error:", err);

//   res.status(500).json({
//     success: false,
//     message: err.message,
//   });
// });

// // Prevent Server Crash on Background Email Failures
// process.on("unhandledRejection", (reason, promise) => {
//   console.error("⚠️ Background Task Failed (e.g. Email sending):", reason);
// });

// // ===============================
// // Start Server
// // ===============================
// const PORT = process.env.PORT || 10000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server Running On Port ${PORT}`);
// });