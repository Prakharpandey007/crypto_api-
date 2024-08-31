const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const { connectDB } = require('./config/database');
const PORT = process.env.PORT || 3000;
const startPriceFetchJob = require('./utils/fetchPriceJob');

const transactionsRoutes = require('./routes/transcations');
const priceRoutes = require('./routes/price');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Connect to MongoDB
connectDB();

// Routes
app.use('/api', transactionsRoutes);
app.use('/api', priceRoutes);

// Start cron job to fetch price every 10 minutes
startPriceFetchJob();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});