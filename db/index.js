// Connect to DB
const { Client } = require('pg');

const client = (process.env.NODE_ENV === 'production') 
  ? new Client({
    connectionString: process.env.DATABASE_URL ,
    ssl: {rejectUnauthorized: false}
  }) 
  : new Client('postgres://localhost:5432/graceshopper?sslmode=disable')

module.exports = {
  client
};
