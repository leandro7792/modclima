import Harvest from '../models/Harvest';
import Farm from '../models/Farm';

class HarvestsController {
  async index(_, res) {
    const harvests = await Harvest.findAll({
      include: [
        {
          model: Farm,
        },
      ],
    });
    return res.status(200).json(harvests);
  }

  async store(req, res) {
    const harvest = await Harvest.create(req.body);

    return res.status(201).json(harvest);
  }

  async update(req, res) {
    const { id } = req.params;

    const harvest = await Harvest.findByPk(id);

    if (harvest) {
      harvest.update(req.body);
      return res.status(200).json(harvest);
    }

    return res.status(404).json({ Error: 'Harvest not found' });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const harvest = await Harvest.findByPk(id);

    if (harvest) {
      harvest.destroy();
      return res.status(204).json();
    }

    return res.status(404).json({ Error: 'Harvest not found' });
  }
}

export default new HarvestsController();
