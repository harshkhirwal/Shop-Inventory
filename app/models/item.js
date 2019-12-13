module.exports = (sequelize, DataTypes) => {

  const Itemlist = sequelize.define('Itemlist', {
  itemID: {
     type: DataTypes.STRING ,
     primaryKey: true,
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

  return Itemlist;
};
