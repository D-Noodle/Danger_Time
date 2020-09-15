const { Pool } = require("pg");
const PG_URI =
  "postgres://zfumxfwb:0PNXwsB496tVxPq3HDpv_At_HmY4clq3@lallah.db.elephantsql.com:5432/zfumxfwb";
const pool = new Pool({
  connectionString: PG_URI,
});

/*
https://node-postgres.com/guides/project-structure
https://sp.postgresqltutorial.com/wp-content/uploads/2018/03/PostgreSQL-Cheat-Sheet.pdf
*/

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
