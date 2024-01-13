const router = require('express').Router();
const auth = require('../middlewares/auth');
const errorHandler = require('../middlewares/error-handler');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const authRouter = require('./auth');
const NotFoundError = require('../exeptions/not-found-error');

router.use('/', authRouter);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', (req, res, next) => next(new NotFoundError('Запрашиваемый ресурс не найден')));

router.use(errorHandler);

module.exports = router;
