const express = require('express');
module.exports = function (app) {

    const router = express.Router();
    app.use('/api', router);

    const compromissos = require('../api/compromisso/compromissosService');
    const alunos = require('../api/alunos/alunosService');

    compromissos.register(router, '/compromissos');
    alunos.register(router, '/alunos');
    
    
}