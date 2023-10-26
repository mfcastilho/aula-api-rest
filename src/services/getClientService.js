const repository = require("../repositories/client.repository");

const getClientService = {
     async execute(id) {

          const client = await repository.findByPk(id);

          return client;
     }
}

module.exports = getClientService;