const router = require('express').Router();
const { errors } = require('celebrate');
const helmet = require('helmet');
const { cors } = require('../middlewares/cors');
const auth = require('../middlewares/auth');
const limiter = require('../middlewares/rateLimiter');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const errorHandler = require('../middlewares/error-handler');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const authRouter = require('./auth');
const NotFoundError = require('../exeptions/not-found-error');
const { NOT_FOUND_ERROR_MESSAGE } = require('../utils/requestMessage');

router.use(cors);
router.use(requestLogger);
router.use(helmet());
router.use(limiter);
router.use('/', authRouter);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', (req, res, next) => next(new NotFoundError(NOT_FOUND_ERROR_MESSAGE)));

router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;
