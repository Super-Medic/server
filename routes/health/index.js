const express = require('express');
const router = express.Router();

const diagnosis = require("./diagnosis");
const medicine = require('./medicine');
const screenings = require('./screenings');

router.use("/diagnosis", diagnosis);
router.use("/medicine", medicine);
router.use("/screenings", screenings);

module.exports = router;

