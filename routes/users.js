const router = require('express').Router();
const {
  readCurrentUser,
  updateUserProfile,
} = require('../controllers/users');
const validateUpdateUserProfile = require('../middlewares/requestValidation/userValidate');

router.get('/me', readCurrentUser);
router.patch('/me', validateUpdateUserProfile, updateUserProfile);

module.exports = router;
