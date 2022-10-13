const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {

    let AllBooks = await Book.findAll();

    if (AllBooks.length > 0) {
        return res.status(200).json(AllBooks)
    }
    res.status(404).send("Não há nenhum livro disponivel atualmente!");

};

exports.getOneBook = async (req, res) => {

    let { id } = req.params;

    const OneBook = await Book.findOne({ where: { id: id } });

    if (OneBook) {
        return res.status(200).json(OneBook);
    }
    res.status(404).send(`O livro de id ${id} não foi encontrado`);

};

exports.createBook = async (req, res) => {

    let { titulo, autor, dataPublicacao } = req.body;

    let result = await Book.create({
        titulo,
        dataPublicacao,
        autor
    });

    res.status(200).json(result);

};

exports.deleteBook = async (req, res) => {

    let { id } = req.params;

    id = Number(id);

    let bookToDelete = await Book.findOne({ where: { id: id } });

    if (bookToDelete) {
        Book.destroy({ where: { id: id } })
        return res.status(200).send(`Usuario de id ${id} excluido com suceesso`);
    }
    res.status(400).send(`Usuario de id ${id} nao encontrado`);

};

exports.updateBook = async (req, res) => {

    let { id } = req.params;

    id = Number(id);

    const { titulo, dataPublicacao, autor } = req.body;

    let BookToUpdate = Book.findOne({ where: { id: id } });

    BookToUpdate.titulo = titulo;
    BookToUpdate.dataPublicacao = dataPublicacao;
    BookToUpdate.autor = autor;

    Book.update(BookToUpdate, { where: { id: id } });

    res.status(200).send(`Livro de id ${id} foi atualizado com sucesso`);

};