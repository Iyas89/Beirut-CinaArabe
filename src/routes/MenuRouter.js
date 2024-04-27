
const { Router } = require("express");
const { createPlatosHandler } = require("../Handlers/createPlatosHandler");
const { getPlatosHandler } = require("../Handlers/getPlatosHandler")
 

const MenuRouter = Router();

// Rutas para crear un plato y una categoría
MenuRouter.post("/", createPlatosHandler);

// Ruta para traer el menu
MenuRouter.get("/", getPlatosHandler);

module.exports = MenuRouter;
