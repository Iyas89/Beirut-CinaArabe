
const { Router } = require("express");
 
 const { createCategoryHandler } = require("../Handlers/createCategoryHandler");
 const { getCategoriesHandler } = require("../Handlers/getCategoriesHandler")

const CategoryRouter = Router();

// Rutas para crear una categoría
CategoryRouter.post("/", createCategoryHandler); 


CategoryRouter.get("/", getCategoriesHandler); 
 

module.exports = CategoryRouter;
