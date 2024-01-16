const router = require('express').Router();
const { createUser, loginUser } = require('../controllers/users');
const { valiateCreateUser, validateLoginUser } = require('../middlewares/requestValidation/authValidate');

router.post('/signup', valiateCreateUser, createUser);
router.post('/signin', validateLoginUser, loginUser);

module.exports = router;
