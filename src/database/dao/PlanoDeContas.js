
module.exports = (sequelize, DataTypes) => {
    const PlanoDeContas = sequelize.define('PlanoDeContas', {
        nome: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        },
        codigo: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        },
        deleted: DataTypes.INTEGER,
    });

    return PlanoDeContas;
};
