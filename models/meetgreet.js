'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meetgreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meetgreet.init({
    meet_greet_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    band_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meetgreet',
  });
  return Meetgreet;
};