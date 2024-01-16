const NOT_FOUND_ERROR_MESSAGE = 'Запрашиваемый ресурс не найден';
const SERVER_ERROR_MESSAGE = 'Ошибка сервера';

const AUTH_MESSAGES = {
  UnauthorizedError: 'Необходима авторизация',
};

const USER_REQUEST_MESSAGES = {
  UnauthorizedError: 'Неправильный email или пароль',
  ConflictError: 'Этот email уже используется',
  BadRequestError: 'Неверный формат идентификатора пользователя',
  NotFoundError: 'Пользователь с таким идентификатором не найдена',
};
const MOVIE_REQUEST_MESSAGES = {
  NotFoundError: 'Фильм с таким идентификатором не найдена',
  ForbiddenError: 'Вы не владелец фильма',
  BadRequestError: 'Неверный формат идентификатора фильма',
  DeleteSuccess: 'Фильм удален',
};

module.exports = {
  NOT_FOUND_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  AUTH_MESSAGES,
  USER_REQUEST_MESSAGES,
  MOVIE_REQUEST_MESSAGES,
};
