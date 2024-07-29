// routes/geminiRoutes.js
const express = require("express");
const router = express.Router();
const geminiController = require("../controllers/geminiController");

router.post("/suggestions", geminiController.getSuggestions);

module.exports = router;
