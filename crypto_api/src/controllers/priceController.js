const Price = require("../models/Price");
const { getEthereumPrice } = require("../services/coingeckoService");

const fetchAndSavePrice = async () => {
  const price = await getEthereumPrice();
  await Price.create({ price });
};

const getCurrentPrice = async (req, res) => {
  try {
    const latestPrice = await Price.findOne().sort({ date: -1 });
    res.json(latestPrice);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch price" });
  }
};

module.exports = { fetchAndSavePrice, getCurrentPrice };
