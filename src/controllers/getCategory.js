const { Categories } = require("../db")


const getCategories = async() => {
    try {
        const category = await Categories.findAll()
        return category;
    } catch (error) {
        throw new Error("no se puede cargar la category")
    }

}

module.exports= {getCategories}