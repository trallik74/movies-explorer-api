const router = require('express').Router();
const {
  readCurrentUser,
  updateUserProfile,
} = require('../controllers/users');

router.get('/me', readCurrentUser);
router.patch('/me', updateUserProfile);

module.exports = router;
