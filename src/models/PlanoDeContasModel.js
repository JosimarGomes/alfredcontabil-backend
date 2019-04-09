const { PlanoDeContas } = require('../database/dao');
const BaseModels = require('../libs/sequelize-md');

class PlanoDeContasModel extends BaseModels {

    constructor(objectData) {
        super();
        this.objectDao = PlanoDeContas;
        this.objectData = objectData;
        this.primaryKey = "id";
        this.deletedRow = ["deleted", 1];
    }

    search(search = '') {
        if (search !== '') {
            this.query.setWhere({
                nome: { [this.query.Op.like]: `%${search}%` }
            });
        }

        return this;
    }

}

module.exports = PlanoDeContasModel;
