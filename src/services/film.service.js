const filmRepo = require("../repositories/film.repository");

const fetchFilms = async (page = 1, size = 10, title = "", rating = "") => {
  const limit  = parseInt(size);
  const offset = (parseInt(page) - 1) * limit;
  return await filmRepo.getFilms(limit, offset, title, rating);
};

const fetchFilmsCount = async () => {
  return await filmRepo.getFilmsCount();
};

module.exports = { fetchFilms, fetchFilmsCount };