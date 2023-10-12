const { getAllClientsService: service } = require("../services")

const getAllClientsController = {
     async handle(req, res) {

          try {
               const clients = await service.execute();

               return res.status(200).json(clients);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }


     }
}

module.exports = getAllClientsController;