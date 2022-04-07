const express = require("express");
const {
  getTransactions,
  CreateTransactions,
  CreateTransactions1,
  CreateTransactions2,
} = require("../controllers/transactionController.jsx");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.jsx");

router.route("/").get(protect, getTransactions);

router.route("/create").post(protect, CreateTransactions);

router.route("/create1").post(protect, CreateTransactions1);

router.route("/create2").post(protect, CreateTransactions2);

module.exports = router;
