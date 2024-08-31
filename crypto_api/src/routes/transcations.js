const express = require("express");
const router = express.Router();
const {
  fetchAndSaveTransactions,
  getTotalExpenses,
} = require("../controllers/transactionsController");

router.get("/transactions/:address", fetchAndSaveTransactions);
router.get("/expenses/:address", getTotalExpenses);

module.exports = router;
