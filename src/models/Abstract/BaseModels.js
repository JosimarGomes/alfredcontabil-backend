const { beginTransaction } = require('../../database/dao');
const Query = require('../SQL/Query');

class BaseModels {

    constructor() {
        this.objectData = {};
        this.objectDao = {};
        this.primaryKey = null;
        this.query = new Query();
    }

    async create() {

        const transaction = await beginTransaction();

        try {
            if (typeof this.beforeCreate === 'function') {
                await this.beforeCreate(transaction);
            }

            const data = await this.objectDao.create(this.objectData, { transaction });

            if (typeof this.afterCreate === 'function') {
                await this.afterCreate(transaction);
            }

            await transaction.commit();
            return data;

        } catch (err) {
            await transaction.rollback();
            return Promise.reject(err);
        }
    }

    async update() {

        const transaction = await beginTransaction();
        
        try {
            if (!this.objectData[this.primaryKey]) {
                throw Error('Dados não informados corretamente');
            }

            if (typeof this.beforeUpdate === 'function') {
                await this.beforeUpdate(transaction);
            }

            const options = { where: { [this.primaryKey]: this.objectData[this.primaryKey] }, transaction };
            await this.objectDao.update(this.objectData, options);

            if (typeof this.afterUpdate === 'function') {
                await this.afterUpdate(transaction);
            }

            await transaction.commit();
            return this.objectDao.findByPk(this.objectData[this.primaryKey]);

        } catch (err) {
            await transaction.rollback();
            return Promise.reject(err);
        }
    }

    async delete(id) {

        const transaction = await beginTransaction();

        try {

            if (!id) {
                throw new Error('Identificador não informada');
            }

            if (typeof this.beforeDelete === 'function') {
                await this.beforeDelete(transaction);
            }

            return this.findByPk(id)
                .then(async (res) => {

                    if (!res.id) {
                        throw new Error('Registro não encontrado');
                    }

                    this.objectData = { ...res.dataValues, deleted: 1 };

                    const options = { where: { [this.primaryKey]: this.objectData[this.primaryKey] }, transaction };
                    const data = await this.objectDao.update(this.objectData, options);

                    if (typeof this.afterDelete === 'function') {
                        await this.afterDelete(transaction);
                    }

                    await transaction.commit();
                    return data;
                });
        } catch (err) {
            await transaction.rollback();
            return Promise.reject(err);
        }
    }

    async findAndCountAll(options = {}) {

        try {
            
            this.query.setWhere({
                deleted: {
                    [this.query.Op.notIn]: 1,
                },
            })

            return await this.objectDao.findAndCountAll(this.query.toSQL());
        } catch (err) {
            return Promise.reject(err);
        }
    }

    findByPk(primaryKey) {
        try {
            return this.objectDao.findByPk(primaryKey);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    setLimit(limit) {
        this.query.setLimit(limit);
        return this;
    }

    setPage(page) {
        this.query.setPage(page)
        return this;
    }

    setOrder(arrOrder) {
        this.query.setOrder(arrOrder);
        return this;
    }

    setGroupBy(groupBy) {
        this.query.setGroupBy(groupBy);
        return this;
    }
}

module.exports = BaseModels;
