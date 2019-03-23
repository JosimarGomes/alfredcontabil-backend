const { PlanoDeContas } = require('../database/dao');
const BaseModels = require('./Abstract/BaseModels');
const Query = require('./SQL/Query');

class PlanoDeContasModel extends BaseModels {

    constructor(objectData) {
        super();
        this.objectDao = PlanoDeContas;
        this.objectData = objectData;
        this.primaryKey = "id";
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
