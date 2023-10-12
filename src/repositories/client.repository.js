const connection = require("../configs/connection/index");


const clientRepository = {

     
     findAll: async function() {
          
          const sql = 'SELECT * FROM clients';

          const response = await connection.query(sql);

          return response.rows;
     },


     findByPk: async function(id) {

          const sql = 'SELECT * FROM clients WHERE id = $1';

          const response = await connection.query(sql, [id]);

          return response.rows[0];
     },
     
     
     create: async function(clientData) {

          const { email, name, cpf, age } = clientData;

          const sql = `
          INSERT INTO clients 
          (email, name, cpf, age) 
          VALUES 
          ($1, $2, $3, $4) RETURNING *`;

          const response = await connection.query(sql, [email, name, cpf, age])

          return response.rows[0];
     },


     update: async function(id, clientData) {

          const { email, name, cpf, age } = clientData;

          const sql = 'UPDATE clients SET email = $1, name = $2, cpf = $3, age = $4 WHERE id = $5 RETURNING *';

          const values = [email, name, cpf, age, id];

          const response = await connection.query(sql, values);

          return response.rows[0];
     },

     destroy: async function(id) {

          const sql = 'DELETE FROM clients WHERE id = $1 RETURNING *';

          const response = await connection.query(sql, [id]);

          return response.rows[0];
     }
     
}

module.exports = clientRepository;