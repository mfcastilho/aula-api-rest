const { Router } = require("express");

const clientRoutes = Router();


const { createClientController, 
        getAllClientsController, 
        getClientController, 
        updateClientController,
        deleteClientController } = require("../controllers");

const { verifyfEmailExists, 
        verifyClientFields, 
        verifyIfCpfExists, 
        validateCpf, 
        verifyIfIdIsANumber, 
        verifyIfClientExists, 
        verifyEmailFormat } = require("../middlewares");


clientRoutes.post(
     "/cliente", 
     verifyClientFields, 
     verifyfEmailExists, 
     verifyIfCpfExists, 
     verifyEmailFormat, 
     validateCpf, 
     createClientController.handle
);

clientRoutes.get(
     "/cliente", 
     getAllClientsController.handle
);

clientRoutes.get(
     "/cliente/:id", 
     verifyIfIdIsANumber, 
     verifyIfClientExists, 
     getClientController.handle
);

clientRoutes.put(
     "/cliente/:id", 
     verifyIfIdIsANumber, 
     verifyIfClientExists,
     verifyClientFields, 
     verifyfEmailExists, 
     verifyIfCpfExists, 
     verifyEmailFormat, 
     validateCpf,
      updateClientController.handle
);

clientRoutes.delete("/cliente/:id", verifyIfIdIsANumber, 
verifyIfClientExists, deleteClientController.handle);


module.exports = clientRoutes;