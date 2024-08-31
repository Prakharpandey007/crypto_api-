// models/Transaction.js
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  blockNumber: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  gas: {
    type: String,
    required: true,
  },
  gasPrice: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
