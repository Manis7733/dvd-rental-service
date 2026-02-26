const pool = require("../config/db");

const getCustomers = async (limit, offset, name = "") => {
  let query = `SELECT customer_id, first_name, last_name, email, active
               FROM customer WHERE 1=1`;
  const params = [];

  if (name) {
    params.push(`%${name}%`);
    query += ` AND (first_name ILIKE $${params.length} OR last_name ILIKE $${params.length} OR email ILIKE $${params.length})`;
  }

  params.push(limit, offset);
  query += ` ORDER BY last_name, first_name LIMIT $${params.length - 1} OFFSET $${params.length}`;

  const { rows } = await pool.query(query, params);
  return rows;
};

const getCustomersCount = async () => {
  const { rows } = await pool.query("SELECT COUNT(*) FROM customer");
  return rows[0];
};

module.exports = { getCustomers, getCustomersCount };