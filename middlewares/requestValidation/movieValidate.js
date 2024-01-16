const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateUrl = (value, helper) => (validator.isURL(value) ? value : helper.message('Неправильный формат URL'));

const valiateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().custom(validateUrl).required(),
    trailerLink: Joi.string().custom(validateUrl).required(),
    thumbnail: Joi.string().custom(validateUrl).required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validateMovieIdParams = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  valiateCreateMovie,
  validateMovieIdParams,
};
