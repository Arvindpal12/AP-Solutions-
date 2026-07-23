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



// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const mongoose = require('mongoose');

// const app = express();

// // CORS - Sab allow (Temporary - Testing ke liye)
// app.use(cors({
//   origin: '*',                    
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// // Body Parser
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true }));

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ MongoDB Connected'))
//   .catch(err => {
//     console.error('❌ MongoDB Error:', err);
//     process.exit(1);
//   });

// // Routes
// const contactRoutes = require('./routes/contactroutes');
// app.use('/api', contactRoutes);

// // 404 Handler
// app.use((req, res) => {
//   res.status(404).json({ success: false, message: 'Route not found' });
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error('Server Error:', err);
//   res.status(500).json({ success: false, message: 'Something went wrong' });
// });

// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log('✅ CORS: origin * (All origins allowed for testing)');
// });



const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// CORS - Testing ke liye sab allow (credentials false rakha hai kyunki origin '*' hai)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body Parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB Error:', err);
    process.exit(1);
  });

// Routes
const contactRoutes = require('./routes/contactroutes');
app.use('/api', contactRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ success: false, message: 'Something went wrong' });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log('✅ CORS: origin * (All origins allowed for testing)');
});