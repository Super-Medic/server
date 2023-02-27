const express = require('express');
const router = express.Router();
const health = require("./health");
const user = require("./users");
const medicine = require("./medicine");

/**
 * HYPHEN API 호출
 */
router.use("/health", health);
router.use("/user", user);
router.use("/medicine", medicine);

module.exports = router;

