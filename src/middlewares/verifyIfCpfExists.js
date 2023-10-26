const repository = require("../repositories/client.repository");

const verifyIfCpfExists = async (req, res, next)=>{
     
     const { cpf } = req.body;

     const { id } = req.params;

     if(id) {
          const { id } = req.params;

          const currentClient = await repository.findByPk(id);

          if(currentClient.cpf === cpf) return next();
     }

     const cpfExists = await repository.findOne("cpf", cpf);

     if(cpfExists.rowCount > 0) return res.status(400).json({error: "Cpf já se encontrad cadastrado."});

     return next();
}

module.exports = verifyIfCpfExists;