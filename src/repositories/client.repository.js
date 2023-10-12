const connection = require("../configs/connection/index");


const clientRepository = {

     create: async function(clientData) {

          const { email, name, cpf, age } = clientData;

          const sql = `
          INSERT INTO clients 
          (email, name, cpf, age) 
          VALUES 
          ($1, $2, $3, $4) returning *`;

          const response = await connection.query(sql, [email, name, cpf, age])

          return response.rows[0];
     }
     
}

module.exports = clientRepository;