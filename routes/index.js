const express = require('express');
const router = express.Router();
const health = require("./health");
const user = require("./users");
/**
 * HYPHEN API 호출
 */
router.use("/health", health);
router.use("/user", user);

module.exports = router;

