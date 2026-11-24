// Skeleton tests: the API shape is wired up. Feature tests are added per user story.
const request = require('supertest');
const app = require('../src/app');

describe('API skeleton', () => {
  test('GET /api/v1/health answers ok', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('unknown endpoint answers 404 in the standard error format', async () => {
    const res = await request(app).get('/api/v1/does-not-exist');
    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('NOT_FOUND');
  });

  test('public endpoint not built yet answers 501', async () => {
    const res = await request(app).get('/api/v1/clinics');
    expect(res.status).toBe(501);
    expect(res.body.error.code).toBe('NOT_IMPLEMENTED');
  });

  test('protected patient endpoint without a token answers 401', async () => {
    const res = await request(app).get('/api/v1/appointments/mine');
    expect(res.status).toBe(401);
  });

  test('receptionist endpoint without a token answers 401', async () => {
    const res = await request(app).get('/api/v1/admin/appointments');
    expect(res.status).toBe(401);
  });

  test('malformed JSON answers 400 INVALID_JSON', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send('{"phone":');
    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('INVALID_JSON');
  });
});
