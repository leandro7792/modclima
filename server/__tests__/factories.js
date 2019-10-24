import faker from 'faker';
import { factory } from 'factory-girl';

import Mill from '../src/app/models/Mill';

factory.define('Mill', Mill, {
  name: faker.company.companyName(),
});

export default factory;
