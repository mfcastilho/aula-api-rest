
const { Pool } = require("pg");

const connection = new Pool({
     host: "localhost",
     port: 5432,
     user: "postgres",
     password: "clfm3891",
     database: "db_aula3_api_rest"
});

module.exports = connection;