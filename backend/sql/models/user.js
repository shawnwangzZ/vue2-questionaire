const db = require('../db');

module.exports = db.defineModel('users', {
  name: db.STRING(20),
  password: db.STRING(100),
  state: {
    type: db.INTEGER,
    allowNull: true,
    defaultValue: 1
  },
  property: {
    type: db.INTEGER,
    allowNull: true,
    defaultValue: 1
  },
  createAt: db.BIGINT
});