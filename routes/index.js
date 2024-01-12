const router = require('express').Router();
const { createUser, loginUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const errorHandler = require('../middlewares/error-handler');
const usersRouter = require('./users');
const NotFoundError = require('../exeptions/not-found-error');

router.post('/signup', createUser);
router.post('/signin', loginUser);
router.use(auth);
router.use('/users', usersRouter);
router.use('*', (req, res, next) => next(new NotFoundError('Запрашиваемый ресурс не найден')));

router.use(errorHandler);

module.exports = router;
