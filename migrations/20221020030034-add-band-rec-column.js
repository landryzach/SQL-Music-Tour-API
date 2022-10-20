'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('bands', 'recommendation', {
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('bands', 'recommendation')
  }
};
