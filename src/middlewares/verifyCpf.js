

const verifyCpf = function(req, res, next) {

     const { cpf } = req.body;

     if(cpf.length !== 11 || isNaN(cpf)) return res.status(400).json({error: "Cpf tem que ter necessariamente 11 caracteres numéricos"});

     return next();
} 

module.exports = verifyCpf;