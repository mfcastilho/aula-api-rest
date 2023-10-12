const repository = require("../repositories/client.repository");

const verifyIfClientExists = async (req, res, next)=>{
     
     try {
          const { id } = req.params;

          const client = await repository.findByPk(id);

          if(!client) return res.status(404).json({error: "Cliente não encontrado."});

          return next();
          
     } catch (error) {
          return res.status(500).json({error: "Erro interno do servidor"});
     }
}

module.exports = verifyIfClientExists;