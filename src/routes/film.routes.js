const express    = require("express");
const router     = express.Router();
const controller = require("../controllers/film.controller");

router.get("/count", controller.getFilmsCount);
router.get("/",      controller.getFilms);

module.exports = router;