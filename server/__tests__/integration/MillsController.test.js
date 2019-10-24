import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';

describe('Mills', () => {
  it('should create a mill', async () => {
    const mill = await factory.attrs('Mill');
    const response = await request(app)
      .post('/mills')
      .send(mill);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should return an array of mills', async () => {
    const response = await request(app).get('/mills');

    expect(response.body).toBeInstanceOf(Array);
  });

  it('should update an mill that exist', async () => {
    const mill = await factory.attrs('Mill');
    const response = await request(app)
      .post('/mills')
      .send(mill);

    const response1 = await request(app)
      .put('/mills/123456')
      .send(mill);

    expect(response1.status).toBe(404);

    const response2 = await request(app)
      .put(`/mills/${response.body.id}`)
      .send(mill);

    expect(response2.status).toBe(200);
  });

  it('should delete a valid mill', async () => {
    const mill = await factory.attrs('Mill');
    const response = await request(app)
      .post('/mills')
      .send(mill);

    const response1 = await request(app).delete('/mills/123456');
    expect(response1.status).toBe(404);

    const response3 = await request(app).delete('/mills/banana');
    expect(response3.status).toBe(404);

    const response2 = await request(app).delete(`/mills/${response.body.id}`);
    expect(response2.status).toBe(204);
  });
});
