const {Category,Menu}= require ("../db.js");

async function createMenu(name, description, price, image) {
    try {
        let categoryInstance = await Category.findOne({ where : {name: Category}});

        if(!categoryInstance){
            categoryInstance = await Category.create({ name : Category})
        }

        const newMenu = await Menu.create({
            name,
            description,
            price,
            image,
            CategoryId: categoryInstance.id
        })

        return { Plato: newMenu};

    } catch (error) {
        throw new Error("no se puede crear el plate")
    }
}

module.exports = {createMenu};