const repository = require("../repositories/client.repository");

const updateClientService = {
     async execute(id, clientData) {

               const userUpdated = await repository.update(id, clientData);
               
               return userUpdated;
     }
}

module.exports = updateClientService;