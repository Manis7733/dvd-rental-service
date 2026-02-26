const filmService = require("../services/film.service");

const getFilms = async (req, res) => {
  try {
    const { page, size, title, rating } = req.query;
    const films = await filmService.fetchFilms(page, size, title, rating);
    res.json(films);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFilmsCount = async (req, res) => {
  try {
    const result = await filmService.fetchFilmsCount();
    res.json({ count: result.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getFilms, getFilmsCount };