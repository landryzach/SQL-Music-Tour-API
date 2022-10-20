'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Eventstage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Eventstage.init({
    event_stage_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Eventstage',
  });
  return Eventstage;
};