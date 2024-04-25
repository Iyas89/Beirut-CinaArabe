const {createMenu} = require("../controllers/createMenu");

const createMenuHandler = async (req, res) => {

const {name, description, price, image} = req.body;

try {
    {
        const newMenu = await createMenu(
            name, description, price, image
        );
        res.status(201).json(newMenu);
    }
} catch (error) {
    res.status(500).json({error: error.message})
}
}

module.exports = {createMenuHandler};