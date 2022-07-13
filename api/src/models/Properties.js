const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("properties", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    rooms: {
      type: DataTypes.INTEGER,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bought: {
      //esto va a ser deleteado cuando de deployee la cuestion.
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    rented: {
      //esto va a ser deleteado cuando de deployee la cuestion.
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    available: {
      //esto va a ser deleteado cuando de deployee la cuestion.
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
