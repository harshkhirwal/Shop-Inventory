module.exports = (sequelize, DataTypes) => {

  const Itemlists = sequelize.define('Itemlists', {
  itemID: {
     type: DataTypes.STRING ,
     primaryKey: true
  },
  itemName: DataTypes.STRING
  }, {
    timestamps: true
}, {
    classMethods: {
      associate: (models) => {

      }
    }
  });

  return Itemlists;
};
