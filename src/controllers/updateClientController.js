const { updateClientService: service } = require("../services");

const updateClientController = {
     async handle(req, res) {

          try {

               const { name, email, cpf, age } = req.body;

               const { id } = req.params;

               const clientUpdated = await service.execute(id, { email, name, cpf, age });

               return res.status(200).json(clientUpdated);
               return res.status(500).json({error: "Erro interno do servidor."});

               return  res.status(500).json({error: "Erro interno do servidor."});

          }
     }
}

module.exports = updateClientController;