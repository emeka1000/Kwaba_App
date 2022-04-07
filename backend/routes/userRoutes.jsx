const express = require("express");
const {
  authUser,
  registerUser,
  updateUserProfile,
} = require("../controllers/userController.jsx");
const { protect } = require("../middleware/authMiddleware.jsx");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
