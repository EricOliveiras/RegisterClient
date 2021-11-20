const Sequelize = require('sequelize');

const db = require('../database/db');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 255],
    }
  },  
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, 
      len: [11, 11]
    },
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
      len: [1, 255],
    },
    unique: true,
  },
  fone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
