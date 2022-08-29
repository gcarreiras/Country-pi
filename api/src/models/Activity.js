const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    duration:{
        type: DataTypes.TIME, // O que??
        allowNull: false
    },
    season:{
        type: DataTypes.ENUM('summer' , 'fall' , 'winter', 'spring'),
        allowNull: false,
    }
  });
};


