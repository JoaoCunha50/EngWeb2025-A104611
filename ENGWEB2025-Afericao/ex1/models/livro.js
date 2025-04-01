var mongoose = require('mongoose');

var LivroSchema = new mongoose.Schema({
    bookId: {type: String, required: true},
    title: {type: String, required: true},
    series: {type: String, required: true},
    author: {type: String, required: true},
    rating: {type: Number, required: true},
    publishDate: {type: Date, required: true},
    pages: {type: Number, required: true},
    coverImg: {type: String, required: true},
    genres: [{type: String, required: true}],
    characters: [{type: String, required: true}]
}, {versionKey: false, collection: 'dataset'});

module.exports = mongoose.model('Livro', LivroSchema);