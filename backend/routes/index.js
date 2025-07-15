const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/", require("./auth"));
router.use("/projects", require("./project"));
router.use("/tasks", require("./task"));

module.exports = router;
