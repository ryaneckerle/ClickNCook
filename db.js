const Sequelize = require('sequelize');
const sequelize = new Sequelize('click-n-cook', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate().then(
  function () {
    console.log('Connected to click-n-cook postgres database');
  },
  function (err) {
    console.log(err);
  }
);

module.exports = sequelize;
