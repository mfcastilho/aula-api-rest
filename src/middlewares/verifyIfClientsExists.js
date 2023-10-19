const repository = require("../repositories/client.repository");


const verifyIfClientExists = async (req, res, next)=> {
     const { id } = req.params;

     const clientExists = await repository.findByPk(id);


     if(!clientExists || clientExists.rowCount === 0) return res.status(404).json({error: "O Cliente Não foi encontrado."});

     return next();
} 

module.exports = verifyIfClientExists;