require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { PORT, DB_URL } = require('./utils/config');

const app = express();
app.use(express.json());

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('Соединение с Mongo установленно');
  })
  .catch((err) => {
    console.log(`Ошибка при установки соеденения с Mongo: ${err}`);
  });

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте: ${PORT}`);
});
