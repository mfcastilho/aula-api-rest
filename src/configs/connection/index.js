require("dotenv").config();

const { Pool } = require("pg");

const connection = new Pool({
     user: process.env.DB_USER,
     host: process.env.DB_HOST,
     password: process.env.DB_PASS,
     database: process.env.DB_DATABASE,
     port: process.env.DB_PORT
});


module.exports = connection;
