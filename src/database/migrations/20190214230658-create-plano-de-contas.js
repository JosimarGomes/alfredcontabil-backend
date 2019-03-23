module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('PlanoDeContas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            codigo: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            deleted: {
                type: Sequelize.INTEGER,
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

    down: queryInterface => queryInterface.dropTable('PlanoDeContas'),
};
