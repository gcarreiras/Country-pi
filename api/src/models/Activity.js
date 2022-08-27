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
    dificultad:{
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    duracion:{
        type: DataTypes.TIME, // O que??
        allowNull: false
    },
    temporada:{
        type: DataTypes.ENUM('verano' , 'otoño' , 'invierno', 'primavera'),
        allowNull: false,
    }
  });
};


