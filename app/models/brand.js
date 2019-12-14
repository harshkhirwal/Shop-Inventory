module.exports = (sequelize, DataTypes) => {

  const Brandlists = sequelize.define('Brandlists', {
  brandID: {
     type: DataTypes.STRING ,
     primaryKey: true
  },
  brandName: DataTypes.STRING
  }, {
    timestamps: true
}, {
    classMethods: {
      associate: (models) => {

      }
    }
  });

  return Brandlists;
};
