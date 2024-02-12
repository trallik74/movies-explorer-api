const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://158.160.137.108',
  'https://158.160.137.108',
  'http://trallik-bitfilms.nomoredomainsmonster.ru',
  'https://trallik-bitfilms.nomoredomainsmonster.ru',
];

const cors = (req, res, next) => {
  const { method } = req;
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    return res.end();
  }

  return next();
};

module.exports = { cors };
