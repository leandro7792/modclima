import Farm from '../models/Farm';
import Field from '../models/Field';

class FarmsController {
  async index(req, res) {
    const farms = await Farm.findAll({
      include: [
        {
          model: Field,
        },
      ],
    });

    return res.status(200).json(farms);
  }

  async store(req, res) {
    const farm = await Farm.create(req.body);

    return res.status(201).json(farm);
  }

  async update(req, res) {
    const { id } = req.params;

    const farm = await Farm.findByPk(id);

    if (farm) {
      farm.update(req.body);
      return res.status(200).json(farm);
    }

    return res.status(404).json({ Error: 'Farm not found' });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const farm = await Farm.findByPk(id);

    if (farm) {
      farm.destroy();
      return res.status(204).json();
    }

    return res.status(404).json({ Error: 'Farm not found' });
  }
}

export default new FarmsController();
