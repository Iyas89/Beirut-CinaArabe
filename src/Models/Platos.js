const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Platos', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        plato: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        // image: {
        //     type: DataTypes.STRING,
        // },

    }, {timestamps: false});
}