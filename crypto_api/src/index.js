const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
// const mongoose = require('mongoose');
// const cron = require('node-cron');
const { connectDB } = require('./config/database');
// const apiRoutes = require('./routes/api');
// const { fetchAndStoreEthPrice } = require('./controllers/ethPriceController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Connect to MongoDB
connectDB();

// // API routes
// app.use('/api', apiRoutes);

// // Schedule Ethereum price fetching every 10 minutes
// cron.schedule('*/10 * * * *', fetchAndStoreEthPrice);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});