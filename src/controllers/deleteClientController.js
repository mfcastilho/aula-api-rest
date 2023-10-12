const { deleteClientService: service } = require("../services");


const deleteClientController = {
     async handle(req, res) {

          try {

               const { id } = req.params;

               const clienteDeleted = await service.execute(id);

               return res.status(200).json(clienteDeleted);
               
          } catch (error) {
               console.log(error);
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

module.exports = deleteClientController;