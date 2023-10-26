const createClientService = require("./createClientService");
const deleteClientService = require("./deleteClientService");
const getAllClientsService = require("./getAllClientsService");
const getClientService = require("./getClientService");
const updateClientService = require("./updateClientService");



module.exports = {
     getAllClientsService,
     createClientService,
     getClientService,
     updateClientService,
     deleteClientService
}