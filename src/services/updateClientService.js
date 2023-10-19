const repository = require("../repositories/client.repository");

const updateClientService = {
     async execute(id, clientData) {

          const clientUpdated = await repository.update(id, clientData);

          return clientUpdated;
     }
}

module.exports = updateClientService;