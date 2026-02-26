const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Manish@7733",
  database: "dvdrental",
  port: 5432,
});

module.exports = pool;