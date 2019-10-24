require('../../bootstrap');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    if (process.env.NODE_ENV !== 'test') {
      await queryInterface.sequelize.query(
        'CREATE EXTENSION IF NOT EXISTS postgis;'
      );
    }

    return queryInterface.createTable('fields', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gps_point: {
        allowNull: false,
        type: Sequelize.GEOGRAPHY('POINT'),
      },
      id_farm: {
        type: Sequelize.INTEGER,
        references: { model: 'farms', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('fields');
  },
};
