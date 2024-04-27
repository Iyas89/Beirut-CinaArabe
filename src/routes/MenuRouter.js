
const { Router } = require("express");
const { createPlatosHandler } = require("../Handlers/createPlatosHandler");
 

const MenuRouter = Router();

// Rutas para crear un plato y una categoría
MenuRouter.post("/", createPlatosHandler);

module.exports = MenuRouter;
