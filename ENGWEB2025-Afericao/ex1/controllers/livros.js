const Livro = require('../models/livro');

// Get all books (with optional filters)
exports.getAllLivros = async (req, res) => {
    try {
        let query = {};
        if (req.query.character) {
            query.characters = { $regex: req.query.character, $options: 'i' };
        }
        if (req.query.genre) {
            query.genres = req.query.genre;
        }
        const livros = await Livro.find(query);
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get book by ID
exports.getLivroById = async (req, res) => {
    try {
        const livro = await Livro.findOne({ bookId: req.params.id });
        if (!livro) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(livro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all genres
exports.getGenres = async (req, res) => {
    try {
        const genres = await Livro.distinct('genres');
        res.status(200).json(genres.sort());
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all characters
exports.getCharacters = async (req, res) => {
    try {
        const characters = await Livro.distinct('characters');
        res.status(200).json(characters.sort());
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new book
exports.createLivro = async (req, res) => {
    try {
        const livro = new Livro(req.body);
        const newLivro = await livro.save();
        res.status(201).json(newLivro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update book
exports.updateLivro = async (req, res) => {
    try {
        const livro = await Livro.findOneAndUpdate(
            { bookId: req.params.id },
            req.body,
            { new: true }
        );
        if (!livro) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(livro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete book
exports.deleteLivro = async (req, res) => {
    try {
        const livro = await Livro.findOneAndDelete({ bookId: req.params.id });
        if (!livro) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};