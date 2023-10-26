const repository = require("../repositories/client.repository");

const verifIfEmailExists = async (req, res, next)=>{

     const { email } = req.body;

     const { id } = req.params;

     const clientExists = await repository.findOne("email", email);

     if(id) {

          const { id } = req.params;

          const currentClient = await repository.findByPk(id);

          if(currentClient.email === email) return next();
     }


     if(clientExists.rowCount > 0) return res.status(400).json({error: "Email já se encontra cadastrado."});

     return next();
}

module.exports = verifIfEmailExists;