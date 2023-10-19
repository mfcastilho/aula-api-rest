const connection = require("../configs/connection/index");


const clientRepository = {

     create: async function(clientData) {
          
          const { name, email, cpf, age } = clientData;

          const sql = `
          insert into clients
          (name, email, cpf, age)
          values
          ($1, $2, $3, $4) returning *;
          `
          const client = await connection.query(sql, [name, email, cpf, age]);

          return client.rows[0];
     },

     findAll: async function() {

          const sql = `
          select * from clients;
          `
          const clients = await connection.query(sql);

          return clients.rows;
     },

     findByPk: async function(id) {

          const sql = `
          select * from clients where id = $1;
          `;

          const { rows:client } = await connection.query(sql, [id]);

          return client[0];
     },

     findOne: async function(field, value) {

          const sql = `
               select * from clients
               where ${field} = $1 
               returning *;
          `;
          const { row: client} = await connection.query(sql, [value]);

          return client[0];
     },

     update: async function(id, clientData) {

          const { name, email, cpf, age } = clientData;

          const sql = `
          update clients
          set email = $1, name = $2, cpf = $3, age = $4
          where id = $5 returning *
          `;

          const { rows: clientUpdated } = await connection.query(sql, [email, name, cpf, age, id]);

          return clientUpdated[0];
     },

     destroy: async function(id) {

          const sql = `
               delete from clients
               where id = $1 returning *;
          `;
          const { rows: clientDeleted } = await connection.query(sql, [id]);

          return clientDeleted[0];
     }
}

module.exports = clientRepository;