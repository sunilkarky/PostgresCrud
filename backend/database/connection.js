require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.POSTGRES_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log(" Database Connection success");
  })
  .catch((err) => {
    console.log("database connection  failed" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.books = require("../models/bookModel")(sequelize, DataTypes);

//migration
sequelize.sync({ force: false }).then(() => {
  console.log("Migration success");
});
module.exports = db;
