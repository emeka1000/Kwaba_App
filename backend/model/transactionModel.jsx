const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    accommodation_status: {
      type: String,
      // required: true,
    },

    loan_request: {
      type: Number,
      // required: true,
    },

    monthly_salary: {
      type: Number,
      // required: true,
    },

    monthly_plan: {
      type: String,
      // required: true,
    },

    amount: {
      type: Number,
      // required: true,
    },

    result: {
      type: Number,
      // required: true,
    },
    months: {
      type: Number,
      // required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
