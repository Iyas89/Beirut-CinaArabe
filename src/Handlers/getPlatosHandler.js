const {getPlatos} = require("../controllers/getPlatos")

const getPlatosHandler = async(req, res) => {
    try {
        const menu = await getPlatos()
        return res.status(200).json(menu)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = {getPlatosHandler}