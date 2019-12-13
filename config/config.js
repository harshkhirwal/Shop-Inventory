const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

console.log(process.env.DB_HOST);
const config = {
  development: {
    root: rootPath,
    app: {
      name: process.env.DB_NAME
    },
    port: process.env.PORT || 3000,
    db: 'mysql://' + process.env.DB_USER + ':' +  process.env.DB_PASS + '@' + process.env.DB_HOST + '/' + process.env.DB_SQL
  },

  // test: {
  //   root: rootPath,
  //   app: {
  //     name: process.env.DB_NAME
  //   },
  //   port: process.env.PORT || 3000,
  //   db: 'mysql://localhost/shop-inventory-test'
  // },

  production: {
    root: rootPath,
    app: {
      name: process.env.DB_NAME
    },
    port: process.env.PORT || 3000,
    db: 'mysql://' + process.env.DB_HOST + '/' + process.env.DB_SQL + '-production'
  }
};

module.exports = config[env];
