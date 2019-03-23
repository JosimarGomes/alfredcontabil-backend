module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ContasBancarias', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            agenciaNumero: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            contaNumero: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            contaDigito: {
                type: Sequelize.STRING,
            },
            nomeBanco: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            numeroBanco: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            padrao: {
                type: Sequelize.BOOLEAN,
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
    down: queryInterface => queryInterface.dropTable('ContasBancarias'),
};
