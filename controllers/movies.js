const {
  HTTP_STATUS_OK,
  HTTP_STATUS_CREATED,
} = require('node:http2').constants;
const BadRequestError = require('../exeptions/bad-request-error');
const NotFoundError = require('../exeptions/not-found-error');
const ForbiddenError = require('../exeptions/forbidden-error');
const movieModel = require('../models/movie');

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  return movieModel
    .findById(movieId)
    .then((movie) => {
      if (!movie) {
        return next(new NotFoundError('Фильм с таким идентификатором не найдена'));
      }
      if (String(movie.owner) !== req.user._id) {
        return next(new ForbiddenError('Вы не владелец фильма'));
      }
      return movie.deleteOne().then(() => res.status(HTTP_STATUS_OK).send({ message: 'Фильм удален' }));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Неверный формат идентификатора фильма'));
      }
      return next(err);
    });
};

const readAllMovies = (req, res, next) => movieModel
  .find({})
  .populate('owner')
  .then((movie) => res.status(HTTP_STATUS_OK).send(movie))
  .catch(next);

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  return movieModel
    .create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
      owner: req.user._id,
    })
    .then((movie) => {
      movie
        .populate('owner')
        .then(() => res.status(HTTP_STATUS_CREATED).send(movie));
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError(err.message));
      }
      return next(err);
    });
};

module.exports = {
  deleteMovie,
  readAllMovies,
  createMovie,
};
