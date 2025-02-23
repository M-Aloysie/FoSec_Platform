const express = require("express");
const { addFarmer, getFarmers } = require("./controllers/farmercontroller");

const router = express.Router();

router.post("/farmers", addFarmer);
router.get("/farmers", getFarmers);

module.exports = router;
