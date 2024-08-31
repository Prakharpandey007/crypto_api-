const Transaction = require("../models/Transaction");
const { getTransactions } = require("../services/etherscanServices");

const fetchAndSaveTransactions = async (req, res) => {
  const { address } = req.params;
  const apiKey = process.env.ETHERSCAN_API_KEY;

  try {
    const transactions = await getTransactions(address, apiKey);

    // Save transactions to MongoDB
    const savedTransactions = await Transaction.insertMany(
      transactions.map((tx) => ({
        address,
        blockNumber: tx.blockNumber,
        timeStamp: tx.timeStamp,
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: tx.value,
        gas: tx.gas,
        gasPrice: tx.gasPrice,
      }))
    );

    res.json(savedTransactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

const getTotalExpenses = async (req, res) => {
  const { address } = req.params;

  try {
    const transactions = await Transaction.find({ address });
    const totalExpenses = transactions.reduce((total, tx) => {
      return total + (tx.gas * tx.gasPrice) / 1e18;
    }, 0);

    res.json({ totalExpenses });
  } catch (error) {
    res.status(500).json({ error: "Failed to calculate expenses" });
  }
};

module.exports = { fetchAndSaveTransactions, getTotalExpenses };
