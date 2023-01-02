const { knex } = require("knex");

const db = knex({
  client: "pg",
  connection: process.env.POSTGRES_URI,
  // connection: {
  // host: "127.0.0.1",
  // user: "ruona",
  // port: 5432,
  // password: "",
  // database: "aTopTrade",

  // host: process.env.POSTGRES_HOST,
  // user: process.env.POSTGRES_USER,
  // port: 5432,
  // password: process.env.POSTGRES_PASSWORD,
  // database: process.env.POSTGRES_DB,

  // },
});

module.exports = {
  db,
};
