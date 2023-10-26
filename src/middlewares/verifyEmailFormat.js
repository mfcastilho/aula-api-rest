


const verifyEmailFormat = (req, res, next)=>{

     const { email } = req.body;

     const atSignIndex = email.indexOf("@");

     if(atSignIndex === -1 || !email.slice((email.length - atSignIndex)).includes(".")) return res.status(400).json({error: "Formato de email inválido"});

     return next();
}

module.exports = verifyEmailFormat;