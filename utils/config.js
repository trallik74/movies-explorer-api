const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;
const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/bitfilmsdb';
const JWT_SECRET = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'jwt-secret';
const SALT_ROUNDS = 10;

module.exports = {
  PORT,
  DB_URL,
  JWT_SECRET,
  SALT_ROUNDS,
};
