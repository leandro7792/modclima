import Sequelize, { Model } from 'sequelize';

class Farm extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Field, { foreignKey: 'id_farm' });
  }
}

export default Farm;
