const validateCpf = require("./validateCpf");
const verifyClientFields = require("./verifyClientFields");
const verifyEmailFormat = require("./verifyEmailFormat");
const verifyIfClientExists = require("./verifyIfClientExists");
const verifyIfCpfExists = require("./verifyIfCpfExists");
const verifyfEmailExists = require("./verifyIfEmailExists");
const verifyIfIdIsANumber = require("./verifyIfIdIsANumber");




module.exports = {
     verifyClientFields,
     verifyfEmailExists,
     verifyIfCpfExists,
     validateCpf,
     verifyIfIdIsANumber,
     verifyIfClientExists,
     verifyEmailFormat
}