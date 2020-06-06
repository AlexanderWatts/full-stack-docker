import express from 'express';

const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('API app');
});

app.listen(PORT, () => console.log(`API app running on port ${PORT}`));
