const { deleteClientService: service } = require("../services");

const deleteClientController = {
     async handle(req, res) {

          try {
               const { id } = req.params;

               const clientDeleted = await service.execute(id);

               return res.status(200).json(clientDeleted);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }


     }
}

module.exports = deleteClientController;