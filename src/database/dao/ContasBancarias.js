module.exports = (sequelize, DataTypes) => {
    const ContasBancarias = sequelize.define('ContasBancarias', {
        nome: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        },
        agenciaNumero: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
            },
        },
        contaNumero: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
            },
        },
        contaDigito: DataTypes.STRING,
        nomeBanco: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        },
        numeroBanco: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        },
        padrao: {
            type: DataTypes.BOOLEAN,
        },
        deleted: DataTypes.INTEGER,
    });
    // ContasBancarias.associate = (models) => {
    //     console.log('veio', models);
    //     ContasBancarias.hasMany(models.Despesas);
    // };
    return ContasBancarias;
};
