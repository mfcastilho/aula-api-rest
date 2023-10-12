const { Router } = require("express");

const { verifyClientFields, verifyIfClientExists } = require("../middlewares");

const { createClientController, updateClientController, getAllClientsController, getClientController, deleteClientController } = require("../controllers");

const clientRoutes = Router();

clientRoutes.get("/cliente", getAllClientsController.handle);

clientRoutes.post("/cliente", verifyClientFields, createClientController.handle);

clientRoutes.put("/cliente/:id", verifyClientFields, verifyIfClientExists, updateClientController.handle);

clientRoutes.get("/cliente/:id", verifyIfClientExists, getClientController.handle);

clientRoutes.delete("/cliente/:id", verifyIfClientExists, deleteClientController.handle);

module.exports = clientRoutes;