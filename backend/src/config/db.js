// MySQL connection pool. Models use pool.execute(sql, params) so every
// query is parameterized (NFR-07).
const mysql = require('mysql2/promise');
const { db } = require('./env');

const pool = mysql.createPool({
  ...db,
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true, // return DATE / DATETIME as strings, e.g. '2026-12-10'
  charset: 'utf8mb4',
});

module.exports = pool;
