'use strict';
const{Model, DataTypes}= require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Libro extends Model {}
  Libro.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edicion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    editorial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    }, {
    sequelize,
    modelName: 'Libro',
    tableName: 'libros',
  });
  return Libro;
};