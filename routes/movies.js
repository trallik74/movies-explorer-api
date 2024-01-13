const router = require('express').Router();
const {
  deleteMovie,
  readAllMovies,
  createMovie,
} = require('../controllers/movies');

router.get('/', readAllMovies);
router.post('/', createMovie);
router.delete('/:movieId', deleteMovie);

module.exports = router;
