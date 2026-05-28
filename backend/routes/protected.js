const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// GET current user
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.userId).select("username");
  res.json({ user });
});

module.exports = router;
