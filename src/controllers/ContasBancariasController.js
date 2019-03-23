const ContasBancariasModel = require('../models/ContasBancariasModel');

exports.index = (req, res) => {

    const {
        page,
        limit,
    } = req.query;

    const contaBancarias = new ContasBancariasModel();

    contaBancarias
        .setLimit(limit)
        .setPage(page)
        .findAndCountAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.id = (req, res) => {

    const contaBancaria = new ContasBancariasModel();
    contaBancaria.findByPk(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.post = (req, res) => {

    const contaBancaria = new ContasBancariasModel(req.body);
    contaBancaria.create()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.put = (req, res) => {

    const contaBancaria = new ContasBancariasModel(req.body);
    contaBancaria.update()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {

    const contaBancaria = new ContasBancariasModel();
    contaBancaria.delete(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ msg: err.message }));
};
