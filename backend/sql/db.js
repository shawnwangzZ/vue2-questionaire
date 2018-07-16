const Sequelize = require("sequelize");
const config = require("./config");

console.log("init sequelize...");

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

function defineModel(name, attributes) {
  var attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === "object" && value["type"]) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      };
    }
  }
  attrs.id = {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique : true
  };
  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false
  });
}
const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];

const exp = {
  defineModel: defineModel,
  sync: () => {
      // only allow create ddl in non-production environment:
      if (process.env.NODE_ENV !== 'production') {
          sequelize.sync({ force: true });
      } else {
          throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.');
      }
  }
};

for (let type of TYPES) {
  exp[type] = Sequelize[type];
}

module.exports = exp;
