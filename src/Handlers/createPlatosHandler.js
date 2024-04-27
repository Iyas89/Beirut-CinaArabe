const { createPlatos } = require("../controllers/createPlato");

const createPlatosHandler = async (req, res) => {
    const { plato, description, price, category } = req.body;

    try {
        const newPlato = await createPlatos(plato, description, price, category);
        res.status(201).json(newPlato);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createPlatosHandler };