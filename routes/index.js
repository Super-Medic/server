const express = require('express');
const router = express.Router();
const health = require("./health");
const user = require("./users");

router.use("/health", health);
router.use("/user", user);

module.exports = router;

