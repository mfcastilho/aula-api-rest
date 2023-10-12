const { Router } = require("express");
const verifyClientFields = require("../middlewares/verifyClientFields");
const createClientController = require("../controllers/createClientController");

const clientRoutes = Router();

clientRoutes.post("/cliente", verifyClientFields, createClientController.handle);

module.exports = clientRoutes;