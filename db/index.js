// Connect to DB
const { Client } = require('pg');
<<<<<<< HEAD
const DB_NAME = 'graceshopper'
=======
const DB_NAME = 'localhost:5432/graceshopper'
>>>>>>> a50a34993dcbaaad36fd2092689dffd908d19b43
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);

// database methods

// export
module.exports = {
  client,
  // db methods
}
