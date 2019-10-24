import { Router } from 'express';

import MillsController from './app/controllers/MillsController';
import HarvestsController from './app/controllers/HarvestsController';
import FarmsController from './app/controllers/FarmsController';
import FieldsController from './app/controllers/FieldsController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ API: 'V1' }));

// Mills
routes.get('/mills', MillsController.index);
routes.post('/mills', MillsController.store);
routes.put('/mills/:id', MillsController.update);
routes.delete('/mills/:id', MillsController.destroy);

// Harvests
routes.get('/harvests', HarvestsController.index);
routes.post('/harvests', HarvestsController.store);
routes.put('/harvests/:id', HarvestsController.update);
routes.delete('/harvests/:id', HarvestsController.destroy);

// Farms
routes.get('/farms', FarmsController.index);
routes.post('/farms', FarmsController.store);
routes.put('/farms/:id', FarmsController.update);
routes.delete('/farms/:id', FarmsController.destroy);

// Fields
routes.get('/fields', FieldsController.index);
routes.post('/fields', FieldsController.store);
routes.put('/fields/:id', FieldsController.update);
routes.delete('/fields/:id', FieldsController.destroy);

export default routes;
