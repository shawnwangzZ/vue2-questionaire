const db = require('../db');

module.exports = db.defineModel('questions', {
  questionaireId: db.INTEGER,
  title: db.STRING(50),
  type: db.INTEGER,
  state: {
    type: db.INTEGER,
    allowNull: true,
    defaultValue: 1
  },
  createAt: db.BIGINT,
  updateAt: {
    type: db.BIGINT,
    allowNull: true,
    defaultValue: null
  },
  deleteAt: {
    type: db.BIGINT,
    allowNull: true,
    defaultValue: null
  }
});