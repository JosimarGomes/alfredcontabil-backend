module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Movimentacoes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            dataVencimento: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            dataLiquidacao: {
                type: Sequelize.DATE,
                defaultValue: null,
            },
            descricao: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            valor: {
                allowNull: false,
                type: Sequelize.DECIMAL(18, 2),
            },
            status: {
                type: Sequelize.SMALLINT,
                defaultValue: null,
            },
            tipo: {
                allowNull: false,
                type: Sequelize.SMALLINT,
            },
            contaBancariaId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            planoDeContaId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            deleted: {
                type: Sequelize.INTEGER,
                defaultValue: null,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: queryInterface => queryInterface.dropTable('Despesas'),
};
