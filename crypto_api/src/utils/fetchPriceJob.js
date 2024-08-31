const cron = require("node-cron");
const { fetchAndSavePrice } = require("../controllers/priceController");

const startPriceFetchJob = () => {
  cron.schedule("*/10 * * * *", async () => {
    await fetchAndSavePrice();
    console.log("Fetched and saved Ethereum price");
  });
};

module.exports = startPriceFetchJob;
