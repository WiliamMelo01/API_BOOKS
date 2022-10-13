const Sequelize = require('sequelize');
const database = require('../../database');

const Book = database.define('tb_books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataPublicacao: {
        type: Sequelize.DATE,
        allowNull: false
    }, autor: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Book;