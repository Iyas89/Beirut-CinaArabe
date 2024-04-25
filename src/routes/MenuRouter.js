const { Router } = require("express");

//Post Handlers
const {createMenuHandler} = require("../Handlers/createManuHandler")




const MenuRouter = Router();



//Ruta crear un plato
MenuRouter.post("/", createMenuHandler)



module.exports = MenuRouter