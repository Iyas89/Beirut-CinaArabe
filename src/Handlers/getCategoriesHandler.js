const {getCategories} = require("../controllers/getCategory")

const getCategoriesHandler = async(req, res) => {
    try {
        const category = await getCategories()
        return res.status(200).json(category)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = {getCategoriesHandler}