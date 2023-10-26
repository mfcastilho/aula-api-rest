const { createClientService: service } = require("../services");


const createClientController = {
     async handle(req, res) {
          
          try {
               
               const { email, name, cpf, age } = req.body;

               const clientCreated = await service.execute({ name, email, cpf, age });

               return res.status(201).json(clientCreated);

          } catch (error) {
               return  res.status(500).json({error: "Erro interno do servidor."});
          }
     }
}

module.exports = createClientController;