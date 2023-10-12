const repository = require("../repositories/client.repository");

const getAllClientsService = {
     async execute() {

          const clients = await repository.findAll();

          return clients;
     }
}

module.exports = getAllClientsService;