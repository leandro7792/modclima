import Field from '../models/Field';

class FieldController {
  async index(req, res) {
    const fields = await Field.findAll();

    return res.status(200).json(fields);
  }

  async store(req, res) {
    const {
      id_farm,
      gps_point: { latitude, longitude },
    } = req.body;

    const gps_point = { type: 'Point', coordinates: [latitude, longitude] };

    const field = await Field.create({ gps_point, id_farm });

    return res.status(201).json(field);
  }

  async update(req, res) {
    const { id } = req.params;

    const field = await Field.findByPk(id);

    if (field) {
      const {
        id_farm,
        gps_point: { latitude, longitude },
      } = req.body;

      const gps_point = { type: 'Point', coordinates: [latitude, longitude] };

      field.update({ gps_point, id_farm });
      return res.status(200).json(field);
    }

    return res.status(404).json({ Error: 'Field not found' });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const field = await Field.findByPk(id);

    if (field) {
      field.destroy();
      return res.status(204).json();
    }

    return res.status(404).json({ Error: 'Field not found' });
  }
}

export default new FieldController();
