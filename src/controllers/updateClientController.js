const { updateClientService: service } = require("../services")


const updateClientController = {
     async handle(req, res) {

          try {
               
               const { id } = req.params;

               const { email, name, cpf, age } = req.body;

               const clientUpdated = await service.execute(id, { email, name, cpf, age });

               return res.status(200).json(clientUpdated);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

module.exports = updateClientController;