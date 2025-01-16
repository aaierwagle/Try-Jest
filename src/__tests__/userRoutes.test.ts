import request from 'supertest';
import express, { Application } from 'express';
import userRoutes from '../routes/userRoutes';

const app: Application = express();
app.use(express.json());
app.use('/api/users', userRoutes);

describe('User Routes', () => {
  it('GET /api/users - should return a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
    });
  });
});
