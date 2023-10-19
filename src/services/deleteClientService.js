const repository = require("../repositories/client.repository");


const deleteClientService = {
     
     async execute(id) {

          const clientDeleted = await repository.destroy(id);

          return clientDeleted;
     }
}

module.exports = deleteClientService;