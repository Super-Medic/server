const express = require('express');
const router = express.Router();

const diagnosis = require("./diagnosis");
const medicine = require('./medicine');
const screenings = require('./screenings');
/**
 * 진료 내역
 */
router.use("/diagnosis", diagnosis);
/**
 * 투약 내역
 */
router.use("/medicine", medicine);
/**
 * 건강검진 결과
 */
router.use("/screenings", screenings);

module.exports = router;

