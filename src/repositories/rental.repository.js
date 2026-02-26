const pool = require("../config/db");

const getRentals = async (limit, offset, status = "") => {
  let query = `
    SELECT r.rental_id, r.rental_date, r.return_date,
           c.first_name || ' ' || c.last_name AS customer,
           f.title AS film,
           COALESCE(p.amount::text, '0.00') AS amount
    FROM rental r
    JOIN customer c ON r.customer_id = c.customer_id
    JOIN inventory i ON r.inventory_id = i.inventory_id
    JOIN film f ON i.film_id = f.film_id
    LEFT JOIN payment p ON r.rental_id = p.rental_id
    WHERE 1=1`;

  const params = [];

  if (status === "returned") {
    query += ` AND r.return_date IS NOT NULL`;
  } else if (status === "active") {
    query += ` AND r.return_date IS NULL`;
  }

  params.push(limit, offset);
  query += ` ORDER BY r.rental_date DESC LIMIT $${params.length - 1} OFFSET $${params.length}`;

  const { rows } = await pool.query(query, params);
  return rows;
};

const getRentalsCount = async () => {
  const { rows } = await pool.query("SELECT COUNT(*) FROM rental");
  return rows[0];
};

module.exports = { getRentals, getRentalsCount };