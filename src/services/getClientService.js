const repository = require("../repositories/client.repository");

const getClientService = {
     async execute(id) {

          const client = await repository.findByPk(id);
          // const client = await repository.findOne();

          return client;
     }
}

module.exports = getClientService;