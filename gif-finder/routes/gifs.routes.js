const express = require("express");
const { search } = require("../controllers/gif.controller");
const router = express.Router();

router.get("/", search);

module.exports = router;
