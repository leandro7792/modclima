import Sequelize, { Model } from 'sequelize';

class Mill extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Harvest, { foreignKey: 'id_mill' });
  }
}

export default Mill;
