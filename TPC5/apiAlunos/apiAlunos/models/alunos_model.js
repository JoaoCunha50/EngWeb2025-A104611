const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // id
    nome: { type: String, required: true }, // nome
    gitlink: { type: String, required: true},
    tpc1: Boolean,
    tpc2: Boolean,
    tpc3: Boolean,
    tpc4: Boolean,
    tpc5: Boolean,
    tpc6: Boolean,
    tpc7: Boolean,
    tpc8: Boolean,
    teste: Number,
    pratica: Number
},{versionKey: false});

const Aluno = mongoose.model("aluno", AlunoSchema);

module.exports = Aluno;
