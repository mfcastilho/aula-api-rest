


const verifyClientFields = function(req, res, next) {

     const { email, name, cpf, age } = req.body;

     if(!email || !name || !cpf || !age) return res.status(400).json({error: "Todos os campos sãp obrigatórios."});

     return next();
}

module.exports = verifyClientFields;