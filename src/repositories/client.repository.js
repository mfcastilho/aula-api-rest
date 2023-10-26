const connection = require("../configs/connection/index");

const clientRepository = {

     create: async function(clientData) {

          const sql = `
               insert into clients
               (email, name, cpf, age)
               values
               ($1, $2, $3, $4) returning *;
          `;
          
          const clientCreated = await connection.query(sql, [email, name, cpf, age]);

          return clientCreated.rows[0];
     },

     findAll: async function() {

          const sql = `
               select * from clients;
          `;

          const { rows: clients } = await connection.query(sql);

          return clients;
     },

     findByPk: async function(id) {

          const sql = `
               select * from clients
               where id = $1;
          `;

          const client = await connection.query(sql, [id]);

          return client.rows[0];
     },

     findOne: async function(field, value) {

          const sql = `
               select * from clients
               where ${field} = $1;
          `;

          const client = await connection.query(sql, [value]);

          return client;
     },

     update: async function(id, clientData) {

          const { name, email, cpf, age } = clientData;

          const sql = `
               update clients 
               set email = $1 , name = $2, cpf = $3, age = $4
               where id = $5 returning *;
          `;
          const clientUpdated = await connection.query(sql, [email, name, cpf, age, id]);

          return clientUpdated.rows[0];
     },

     destroy: async function(id) {

          const sql = `
               delete from clients
               where id = $1 returning *;
          `;

          const clientDeleted = await connection.query(sql, [id]);

          return clientDeleted.rows[0];
     }
}

module.exports = clientRepository;