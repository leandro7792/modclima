import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

// importar models e colocar dentro do array
import Mill from '../app/models/Mill';
import Harvest from '../app/models/Harvest';
import Farm from '../app/models/Farm';
import Field from '../app/models/Field';

const models = [Mill, Harvest, Farm, Field];
// =========================================

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
