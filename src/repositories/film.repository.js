const pool = require("../config/db");

const getFilms = async (limit, offset, title = "", rating = "") => {
  let query = `SELECT film_id, title, rental_rate, rating, length, description
               FROM film WHERE 1=1`;
  const params = [];

  if (title) {
    params.push(`%${title}%`);
    query += ` AND title ILIKE $${params.length}`;
  }
  if (rating) {
    params.push(rating);
    query += ` AND rating = $${params.length}`;
  }

  params.push(limit, offset);
  query += ` ORDER BY title LIMIT $${params.length - 1} OFFSET $${params.length}`;

  const { rows } = await pool.query(query, params);
  return rows;
};

const getFilmsCount = async () => {
  const { rows } = await pool.query("SELECT COUNT(*) FROM film");
  return rows[0];
};

module.exports = { getFilms, getFilmsCount };