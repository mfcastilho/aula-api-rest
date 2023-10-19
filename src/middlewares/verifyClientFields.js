

const verifyClientFields = function(req, res, next) {

     const { name, email, cpf, age } = req.body;

     if(!name || !email || !cpf || !age) return res.status(400).json({error: "Todos os campos são obrigatórios."});

     return next();
}

module.exports = verifyClientFields;