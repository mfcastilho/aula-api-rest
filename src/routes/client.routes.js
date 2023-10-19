const { Router } = require("express");

const { createClientController, 
        updateClientController, 
        getAllClientsController,
        getClientController,
        deleteClientController } = require("../controllers");


const { verifyClientFields, 
        verifyClientsExists, 
        verifyCpf, 
        verifyIfIdIsNumber } = require("../middlewares");

const clientRoutes = Router();

clientRoutes.post("/cliente", verifyClientFields, verifyCpf, createClientController.handle);

clientRoutes.get("/cliente", getAllClientsController.handle);

clientRoutes.put("/cliente/:id", verifyClientFields, verifyCpf, verifyIfIdIsNumber, verifyClientsExists, updateClientController.handle);

clientRoutes.get("/cliente/:id", verifyIfIdIsNumber, verifyClientsExists, getClientController.handle);

clientRoutes.delete("/cliente/:id", verifyIfIdIsNumber, verifyClientsExists, deleteClientController.handle);

module.exports = clientRoutes;