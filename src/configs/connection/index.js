const { Pool } = require("pg");

const connection = new Pool({
     host: "localhost",
     user: "postgres",
     password: "clfm3891",
     port: 5432,
     database: "db_aula_api_rest"
});

module.exports = connection;

