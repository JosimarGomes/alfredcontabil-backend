const { ContasBancarias, Movimentacoes } = require('../database/dao');
const BaseModels = require('../libs/sequelize-md');

class ContasBancariasModel extends BaseModels {

    constructor(objectData) {
        super();
        this.objectDao = ContasBancarias;
        this.objectData = objectData;
        this.primaryKey = "id";
        this.deletedRow = ["deleted", 1];
    }

}

module.exports = ContasBancariasModel;
