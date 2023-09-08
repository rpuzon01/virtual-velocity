// Connect to DB
const { Client } = require('pg');

const client = new Client({
	connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/graceshopper?sslmode=disable',
  ssl: {rejectUnauthorized: false}
});

module.exports = {
  client
};
