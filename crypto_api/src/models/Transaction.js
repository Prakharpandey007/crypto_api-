const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    index: true,
  },
  hash: {
    type: String,
    required: true,
    unique: true,
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
  gasUsed: {
    type: Number,
    required: true,
  },
  gasPrice: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
