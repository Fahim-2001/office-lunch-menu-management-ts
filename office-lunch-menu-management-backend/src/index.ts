import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan'
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes'
import menuRoutes from './routes/menuRoutes';
import choiceRoutes from './routes/choiceRoutes'


const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/choices', choiceRoutes);

app.get('/', async (req: Request, res: Response) => {
  try {
    res.send("Welcome to Office Lunch System Backend Services");
  } catch (error: any) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
