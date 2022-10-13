const BookController = require('../controllers/BookController');

module.exports = (app) => {

    app.get('/', BookController.getAllBooks);
    app.get('/:id', BookController.getOneBook);
    app.post('/', BookController.createBook);
    app.delete('/:id', BookController.deleteBook);
    app.put('/:id', BookController.updateBook);
};