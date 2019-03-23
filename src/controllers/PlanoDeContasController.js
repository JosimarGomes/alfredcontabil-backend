const PlanoDeContasModel = require('../models/PlanoDeContasModel');

exports.index = (req, res) => {

    const {
        page,
        limit,
        search
    } = req.query;

    const planoDeContas = new PlanoDeContasModel();

    planoDeContas.search(search)
        .setLimit(limit)
        .setPage(page)
        .findAndCountAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ msg: err.message }));
};

exports.id = (req, res) => {

    const planoDeConta = new PlanoDeContasModel();
    planoDeConta.findByPk(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.post = (req, res) => {

    const planoDeConta = new PlanoDeContasModel(req.body);
    planoDeConta.create()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.put = (req, res) => {

    const planoDeConta = new PlanoDeContasModel(req.body);
    planoDeConta.update()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {

    const planoDeConta = new PlanoDeContasModel();
    planoDeConta.delete(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};
