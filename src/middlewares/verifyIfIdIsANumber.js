

const verifyIfIdIsANumber = (req, res, next)=>{

     const { id } = req.params;

     if(isNaN(id)) return res.status(400).json({error: "O id tem que ser necessariamente um número."});

     return next();
}

module.exports = verifyIfIdIsANumber;