const $Op = require('./Operators');

class Query {

    constructor() {
        this.attributes = [];
        this.where = [];
        this.offSet = 0;
        this.limit = 5;
        this.includes = [];
        this.order = [];
        this.groupBy = [];
        this.Op = $Op;
    }

    setAttributes(attributes) {
        this.attributes = this.attributes.concat(attributes);
        return this;
    }

    setWhere(objectWhere) {
        this.where.push(objectWhere);
        return this;
    }

    setOrWhere(objectOrWhere) {
        this.where.push({ [this.Op.or]: objectOrWhere });
        return this;
    }

    setPage(page) {
        const pageNumber = parseInt(page);
        const offSet = pageNumber === 0 ? 0 : pageNumber - 1;
console.log("pageNumber", pageNumber)
        this.offSet = offSet * this.limit || 0;
        console.log("thisssquery", this)
        return this;
    }

    setLimit(limit) {
        console.log("setlimit",  limit)
        this.limit = parseInt(limit) || 10;
        return this;
    }

    setOrder(order) {
        this.order.push(order);
        return this;
    }

    setGroupBy(groupBy) {
        this.groupBy.push(groupBy);
        return this;
    }

    setInnerJoin(objetcIncludes) {
        if (!objetcIncludes.model) {
            throw new Error('Model não informado');
        }

        this.includes.push(objetcIncludes);
        return this;
    }

    toSQL() {

        const query = {
            offset: this.offSet,
            limit: this.limit,
        };

        if (this.where.length) {
            query.where = this.where;
        }

        if (this.attributes.length) {
            query.attributes = this.attributes;
        }

        if (this.includes.length) {
            query.include = this.includes;
        }

        if (this.order.length) {
            query.order = this.order;
        }

        if (this.groupBy.length) {
            query.group = this.groupBy;
        }

        console.log("query", query)

        return query;
    }
}

module.exports = Query;
