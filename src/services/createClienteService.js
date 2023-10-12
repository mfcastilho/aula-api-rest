const repository = require("../repositories/client.repository");

const createClienteService = {
     async execute (clientData) {

          try {
               const clientCreated = await repository.create(clientData);

               console.log(clientCreated);

               if(!clientCreated) return Error ("Não foi possível cadastrar o cliente");

               return clientCreated;

          } catch (error) {
               throw error;
          }
     }
}

module.exports = createClienteService;