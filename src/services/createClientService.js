const repository = require("../repositories/client.repository"); 


const createClientService = {
     async execute(clientData) {

          const clientCreated = await repository.create(clientData);

          return clientCreated;
     }
}

module.exports = createClientService;