

const verifyIfIdIsNumber = (req, res, next)=>{

     const { id } = req.params;

     if(isNaN(id)) return res.status(400).json({error: "O id tem que ser um caractere numérico."});

     return next();
}

module.exports = verifyIfIdIsNumber;