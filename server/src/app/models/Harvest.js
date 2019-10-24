import Sequelize, { Model } from 'sequelize';

class Harvest extends Model {
  static init(sequelize) {
    super.init(
      {
        start: Sequelize.DATEONLY,
        end: Sequelize.DATEONLY,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Farm, { foreignKey: 'id_harvest' });
  }
}

export default Harvest;
