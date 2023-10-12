const repository = require("../repositories/client.repository");

const GetClientService = {
     async execute(id) {

          const client = await repository.findByPk(id);

          return client;
     }
}

module.exports = GetClientService;