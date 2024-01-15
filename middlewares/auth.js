const { verifyWebToken } = require('../utils/jwt');
const UnauthorizedError = require('../exeptions/unauthorized-error');
const { AUTH_MESSAGES } = require('../utils/requestMessage');

const auth = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return next(new UnauthorizedError(AUTH_MESSAGES.UnauthorizedError));
  }

  token = token.replace('Bearer ', '');

  try {
    const payload = verifyWebToken(token);
    req.user = { _id: payload._id };
  } catch (err) {
    console.log(err);
    return next(new UnauthorizedError(AUTH_MESSAGES.UnauthorizedError));
  }

  return next();
};

module.exports = auth;
