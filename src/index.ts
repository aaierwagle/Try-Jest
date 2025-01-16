import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API with TypeScript!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
