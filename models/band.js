'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet, SetTime }) {
      // meet and greets
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })

      // set times 
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        set_times: "set_times"
      })
    }
  }
  Band.init({
    band_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    recommendation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};