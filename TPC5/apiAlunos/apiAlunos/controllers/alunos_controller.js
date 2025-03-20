var Aluno = require("../models/alunos_model");

module.exports.list = function () {
    return Aluno.find().sort({ nome: 1 }).exec();
};

module.exports.findById = (id) => {
    return Aluno.findOne({ _id: id }).exec();
};

module.exports.insert = (aluno) => {
    if (Aluno.find({ _id: aluno.id }).exec().length() != 1) {
        var newAluno = new Aluno(aluno);
        newAluno._id = aluno.id;
        return newAluno.save();
    } else return false;
};

module.exports.update = (id, aluno) => {
    return Aluno.findByIdAndUpdate(id, aluno).exec();
};

module.exports.remove = (id) => {
    return Aluno.findByIdAndDelete(id).exec();
};
