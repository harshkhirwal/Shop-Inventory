const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'shop-inventory'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/shop-inventory-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'shop-inventory'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/shop-inventory-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'shop-inventory'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/shop-inventory-production'
  }
};

module.exports = config[env];
