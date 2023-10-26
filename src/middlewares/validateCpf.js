

const validateCpf = (req, res, next)=>{
     const { cpf } = req.body;

     if(isNaN(cpf) || cpf.length !== 11) return res.status(400).json({error: "O cpf precister necessariamente 11 caracteres numéricos."});

     return next();
}

module.exports = validateCpf;