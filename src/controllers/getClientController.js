const { getClientService:service } = require("../services");

const getClientController = {
     async handle(req, res) {

          try {

               const { id } = req.params;

               const client = await service.execute(id);

               return res.status(200).json(client);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor."});
          }
     }
}

module.exports = getClientController;