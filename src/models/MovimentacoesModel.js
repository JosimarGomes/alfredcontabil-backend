const { Movimentacoes, ContasBancarias, PlanoDeContas } = require('../database/dao');
const BaseModels = require('./Abstract/BaseModels');
const Query = require('./SQL/Query');

Movimentacoes.belongsTo(
    ContasBancarias,
    {
        foreignKey: {
            name: 'contaBancariaId',
            allowNull: false,
        },
    },
);

Movimentacoes.belongsTo(
    PlanoDeContas,
    {
        foreignKey: {
            name: 'planoDeContaId',
            allowNull: false,
        },
    },
);
 
class MovimentacoesModel extends BaseModels {

    constructor(objectData) {
        super();
        this.objectDao = Movimentacoes;
        this.objectData = objectData;
        this.primaryKey = "id";
    }

    beforeCreate() {
        this.validateFields();
    }

    validateFields() {
        if (!this.objectData.dataVencimento) {
            throw new Error('Data de vencimento não informada.');
        }

        if (!this.objectData.descricao) {
            throw new Error('Descrição não informada.');
        }

        if (!this.objectData.valor) {
            throw new Error('Valor não informado.');
        }

        if (!this.objectData.contaBancariaId) {
            throw new Error('Conta não informada.');
        }

        if (!this.objectData.planoDeContaId) {
            throw new Error('Plano de contas não informado.');
        }

        this.objectData.valor = parseFloat(this.objectData.valor);

        if (this.ehDespesa()) {
            if (parseFloat(this.objectData.valor) > 0) {
                this.objectData.valor = this.objectData.valor * -1;
            }
        }
    }

    ehDespesa() {
        return parseInt(this.objectData.tipo) === 2;
    }

    withPlanoDeContas(flag=false) {
        if (flag == true) {
            this.query.setInnerJoin({
                model: PlanoDeContas,
            });
        }

        return this;
    }

    withContaBancaria(flag=false) {
        if (flag == true) {
            this.query.setInnerJoin({
                model: ContasBancarias,
            });
        }

        return this;
    }

}

module.exports = MovimentacoesModel;
