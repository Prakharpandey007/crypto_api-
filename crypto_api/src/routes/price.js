const express = require("express");
const { getEthereumPrice } = require("../services/priceService");
const router = express.Router();

router.get("/price/ethereum", async (req, res) => {
  try {
    const price = await getEthereumPrice();
    res.json({ ethereum_inr: price });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Ethereum price" });
  }
});

module.exports = router;
