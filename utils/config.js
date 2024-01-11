const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;
const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = {
  PORT,
  DB_URL,
};
