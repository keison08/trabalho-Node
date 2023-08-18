const express = require('express');
const app = express();
const port = 3000;


const sequelize = require('./models');
const app = require('./controlerJogo/controlerJogo');


app.get('/', (req, res) => {
  res.send('Hello world!');
});


app.listen(port, () => {
  console.log(`Servidor está rodando em :${port}`);
});
