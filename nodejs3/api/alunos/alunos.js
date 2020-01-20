const restful = require('node-restful');
const mongoose = restful.mongoose;

const alunoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    turma: { type: String, required: true },
    telefone: { type: String }
});


module.exports = restful.model('aluno', alunoSchema);