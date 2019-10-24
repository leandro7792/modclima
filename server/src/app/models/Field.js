import Sequelize, { Model } from 'sequelize';

class Field extends Model {
  static init(sequelize) {
    super.init(
      {
        gps_point: Sequelize.GEOGRAPHY('POINT'),
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Farm, { foreignKey: 'id_farm' });
  }
}

export default Field;
