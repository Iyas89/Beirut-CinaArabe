const {Platos} = require("../db")


const getPlatos = async() => {
    try {
        const menu = await Platos.findAll()
        return menu;
    } catch (error) {
        throw new Error("no se puede cargar el menu")
    }

}

module.exports= {getPlatos}