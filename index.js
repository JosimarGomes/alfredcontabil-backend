const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PlanoDeContasRoutes = require('./src/routes/PlanoDeContas');
const ContasBancariasRoutes = require('./src/routes/ContasBancarias');
const MovimentacoesRoutes = require('./src/routes/Movimentacoes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000' }));

// app.use('/', index);
app.use('/planodecontas', PlanoDeContasRoutes);
app.use('/contasbancarias', ContasBancariasRoutes);
app.use('/movimentacoes', MovimentacoesRoutes);

// eslint-disable-next-line no-console
console.log('server start on port 3001');

app.listen(3001);
