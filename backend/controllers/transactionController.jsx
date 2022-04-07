const Transaction = require("../model/transactionModel.jsx");
const asyncHandler = require("express-async-handler");

// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
const getTransactions = asyncHandler(async (req, res) => {
  const transaction = await Transaction.find({ user: req.user._id });
  res.json(transaction);
});

//@description     Create single Note
//@route           GET /api/notes/create
//@access          Private
const CreateTransactions = asyncHandler(async (req, res) => {
  const { amount, result, months } = req.body;

  if (!amount || !result || !months) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const transaction = new Transaction({
      user: req.user._id,
      amount,
      result,
      months,
    });

    const transactionExists = await Transaction.findOne({ result });

    if (transactionExists) {
      res.status(400);
      throw new Error("Already Applied, Please wait for a response!");
    }

    const createdTransaction = await transaction.save();

    res.status(201).json(createdTransaction);
  }
});

const CreateTransactions1 = asyncHandler(async (req, res) => {
  const { accommodation_status } = req.body;

  if (!accommodation_status) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const transaction = new Transaction({
      user: req.user._id,
      accommodation_status,
    });

    const transactionExists = await Transaction.findOne({
      accommodation_status,
    });

    if (transactionExists) {
      res.status(400);
      throw new Error("Already Applied, Please wait for a response!");
    }

    const createdTransaction1 = await transaction.save();

    res.status(201).json(createdTransaction1);
  }
});

const CreateTransactions2 = asyncHandler(async (req, res) => {
  const { loan_request, monthly_salary, monthly_plan } = req.body;

  if (!loan_request || !monthly_salary || !monthly_plan) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const transaction = new Transaction({
      user: req.user._id,
      loan_request,
      monthly_salary,
      monthly_plan,
    });

    const transactionExists = await Transaction.findOne({
      loan_request,
    });

    if (transactionExists) {
      res.status(400);
      throw new Error("Already Applied, Please wait for a response!");
    }

    const createdTransaction2 = await transaction.save();

    res.status(201).json(createdTransaction2);
  }
});

module.exports = {
  getTransactions,
  CreateTransactions,
  CreateTransactions1,
  CreateTransactions2,
};
