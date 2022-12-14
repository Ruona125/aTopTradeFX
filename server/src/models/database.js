const { knex } = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    password: "",
    database: "aTopTrade",
  },
});

module.exports = {
  db,
};
