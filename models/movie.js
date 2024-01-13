const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
    },
    director: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
    },
    duration: {
      type: Number,
      required: [true, 'Поле необходимо заполнить'],
    },
    year: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
    },
    description: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
    },
    image: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
      validator: {
        validator: (v) => validator.isURL(v),
        message: 'Неправильный формат URL',
      },
    },
    trailerLink: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
      validator: {
        validator: (v) => validator.isURL(v),
        message: 'Неправильный формат URL',
      },
    },
    thumbnail: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
      validator: {
        validator: (v) => validator.isURL(v),
        message: 'Неправильный формат URL',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    movieId: {
      type: Number,
      required: [true, 'Поле необходимо заполнить'],
    },
    nameRU: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
    },
    nameEN: {
      type: String,
      required: [true, 'Поле необходимо заполнить'],
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('movie', movieSchema);
