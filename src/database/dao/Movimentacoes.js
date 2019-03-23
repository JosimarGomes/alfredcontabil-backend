
module.exports = (sequelize, DataTypes) => {
    const Movimentacoes = sequelize.define('Movimentacoes', {
        dataVencimento: {
            type: DataTypes.DATE,
            validate: {
                isDate: true,
            },
        },
        dataLiquidacao: {
            type: DataTypes.DATE,
            validate: {
                isDate: true,
            },
        },
        descricao: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            },
        },
        status: {
            type: DataTypes.SMALLINT,
            validate: {
                isIn: [[0, 1]],
            },
            defaultValue: 0,
        },
        tipo: {
            type: DataTypes.SMALLINT,
            validate: {
                isIn: [[1, 2]],
            },
            defaultValue: 1,
        },
        contaBancariaId: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
            },
        },
        planoDeContaId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
            },
        },
        deleted: DataTypes.INTEGER,
    });

    return Movimentacoes;
};
