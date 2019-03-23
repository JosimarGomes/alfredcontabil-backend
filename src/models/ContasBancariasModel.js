const { ContasBancarias, Movimentacoes } = require('../database/dao');
const BaseModels = require('./Abstract/BaseModels');
const Query = require('./SQL/Query');

// ContasBancarias.hasMany(
//     Movimentacoes,
//     {
//         foreignKey: {
//             name: 'contaBancariaId',
//             // allowNull: false,
//         },
//     },
// );

class ContasBancariasModel extends BaseModels {

    constructor(objectData) {
        super();
        this.objectDao = ContasBancarias;
        this.objectData = objectData;
        this.primaryKey = "id";
    }

}

module.exports = ContasBancariasModel;
