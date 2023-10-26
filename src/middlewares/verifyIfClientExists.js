const repository = require("../repositories/client.repository");


const verifyIfClientExists = async (req, res, next)=>{

     const { id } = req.params;

     const clientExists = await repository.findByPk(id)

     if(!clientExists) return res.status(404).json({error: "Cliente não encontrado."});

     return next();
}

module.exports = verifyIfClientExists;