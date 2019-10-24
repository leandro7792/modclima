import Mill from '../models/Mill';
import Harvest from '../models/Harvest';

class MillsController {
  async index(_, res) {
    const mills = await Mill.findAll({
      include: [
        {
          model: Harvest,
        },
      ],
    });

    return res.json(mills);
  }

  async store(req, res) {
    const { name } = req.body;

    const mills = await Mill.create({ name });

    return res.status(201).json(mills);
  }

  async update(req, res) {
    const { name } = req.body;
    const { id } = req.params;

    const mill = await Mill.findByPk(id);

    if (mill) {
      mill.update({ name });
      return res.status(200).json(mill);
    }

    return res.status(404).json({ Error: 'Mill not found' });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const mill = await Mill.findByPk(id);

    if (mill) {
      mill.destroy();
      return res.status(204).json();
    }

    return res.status(404).json({ Error: 'Mill not found' });
  }
}

export default new MillsController();
