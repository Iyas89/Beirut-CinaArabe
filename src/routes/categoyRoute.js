
const { Router } = require("express");
 
 const { createCategoryHandler } = require("../Handlers/createCategoryHandler");

const CategoryRouter = Router();

// Rutas para crear una categoría
 
CategoryRouter.post("/", createCategoryHandler); 

module.exports = CategoryRouter;
