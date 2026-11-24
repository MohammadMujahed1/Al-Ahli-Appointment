// Reads settings from backend/.env (copy .env.example to .env first).
require('dotenv').config({ quiet: true });

module.exports = {
  port: Number(process.env.PORT) || 5000,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'ahli_appointments',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '8h', // NFR-04
  },
};
