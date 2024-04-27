const { Categories, Platos } = require("../db");

async function createPlatos(plato, description, price, category) {
    try {
        let categoryInstance = await Categories.findOne({ where: { name: category } });

        if (!categoryInstance) {
          categoryInstance = await EventTypes.create({ name: category });
        }

        const newPlato = await Platos.create({
            plato,
            description,
            price,
            CategoryId: categoryInstance.id
        });

        return  newPlato;

    } catch (error) {
        throw new Error("No se puede crear el plato: " + error.message);
    }
}

module.exports = { createPlatos };
