const express    = require("express");
const router     = express.Router();
const controller = require("../controllers/rental.controller");

router.get("/count", controller.getRentalsCount);
router.get("/",      controller.getRentals);

module.exports = router;