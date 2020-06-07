import express from 'express';
import cors from 'cors';

const PORT = 4000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('api connected');
});

app.listen(PORT, () => console.log(`API app running on port ${PORT}`));
