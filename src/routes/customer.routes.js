const express    = require("express");
const router     = express.Router();
const controller = require("../controllers/customer.controller");

router.get("/count", controller.getCustomersCount);
router.get("/",      controller.getCustomers);

module.exports = router;