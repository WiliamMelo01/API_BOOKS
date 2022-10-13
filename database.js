const Sequelize = require('sequelize');

const sequelize = new Sequelize('korrrbjp', 'korrrbjp', '4ypl2qcit0jzn4hP2Urif-O53UHio9q4', {
    host: 'motty.db.elephantsql.com',
    dialect: 'postgres'
});

module.exports = sequelize;