// Connect to DB
const { Client } = require("pg");
const DB_NAME = "localhost:5432/graceshopper";
const DB_URL = process.env.DATABASE_URL || `postgres://${DB_NAME}`;
const client = new Client(DB_URL);

client.on('error', err => {
    console.error("here's your fucking error", err);
});

module.exports = {
  client
};
