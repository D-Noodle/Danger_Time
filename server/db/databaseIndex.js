const { Pool } = require('pg');
require('dotenv').config();

const { PG_URI } = process.env;
const pool = new Pool({
  connectionString: PG_URI,
});

/*
https://node-postgres.com/guides/project-structure
https://sp.postgresqltutorial.com/wp-content/uploads/2018/03/PostgreSQL-Cheat-Sheet.pdf
*/

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
