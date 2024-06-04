import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import { nanoid } from 'nanoid';

let orders = [
  {
    id: nanoid(),
    order_type: 'writing',
    pages: 3,
    subject: 'coding',
    topic: 'MERN stack',
    sources: 3,
  },
  {
    id: nanoid(),
    order_type: 'editing',
    pages: 3,
    subject: 'social work',
    topic: 'nursing',
    sources: 3,
  },
];

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

app.get('/api/v1/orders', (req, res) => {
  res.status(200).json({ orders });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on port ${port}....`);
});
