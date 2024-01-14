const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;
const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/bitfilmsdb';
const JWT_SECRET = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'jwt-secret';
const URL_REGEX = /https?:\/\/(www\.)?[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]{2,}\.[a-zA-Z]{1,6}[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*#?/;
const SALT_ROUNDS = 10;

module.exports = {
  PORT,
  DB_URL,
  JWT_SECRET,
  URL_REGEX,
  SALT_ROUNDS,
};
