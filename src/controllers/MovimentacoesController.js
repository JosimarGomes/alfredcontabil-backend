const MovimentacoesModel = require('../models/MovimentacoesModel');

exports.index = (req, res) => {

    const movimentacoes = new MovimentacoesModel();

    const {
        page,
        limit,
        comDadosContaBancaria,
        comDadosPlanoDeContas
    } = req.query;

    movimentacoes
        .withPlanoDeContas(comDadosPlanoDeContas)
        .withContaBancaria(comDadosContaBancaria)
        .setLimit(limit)
        .setPage(page)
        .setOrder(['dataVencimento', 'DESC'])
        .findAndCountAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.id = (req, res) => {

    const movimentacao = new MovimentacoesModel();
    movimentacao.findByPk(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.post = (req, res) => {

    const movimentacao = new MovimentacoesModel(req.body);
    movimentacao.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(403).send({ message: err.message }));
};

exports.put = (req, res) => {

    const movimentacao = new MovimentacoesModel(req.body);
    movimentacao.update()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {

    const movimentacao = new MovimentacoesModel();
    movimentacao.delete(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};
