const db = require('../db');

module.exports = db.defineModel('questionaires', {
  userId: db.INTEGER,
  title: db.STRING(50),
  statement: db.STRING(50),
  state: {
    type: db.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  createAt: {
    type: db.BIGINT,
    allowNull: true
  },
  updateAt: {
    type: db.BIGINT,
    allowNull: true,
    defaultValue: null
  }
});