'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
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