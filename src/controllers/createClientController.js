const service = require("../services/createClienteService");


const createClienteController = {
     async handle(req, res) {
          
          try {
               const { email, name, cpf, age } = req.body;

               const clientCreated = await service.execute({ email, name, cpf, age });

               return res.status(201).json(clientCreated);
               
          } catch (error) {
               console.log(error);
               return res.status(500).json({error: "Erro interno do servidor"});
          }


     }
}

module.exports = createClienteController;