const router = require('express').Router();
const {
  deleteMovie,
  readAllMovies,
  createMovie,
} = require('../controllers/movies');
const { valiateCreateMovie, validateMovieIdParams } = require('../middlewares/requestValidation/movieValidate');

router.get('/', readAllMovies);
router.post('/', valiateCreateMovie, createMovie);
router.delete('/:movieId', validateMovieIdParams, deleteMovie);

module.exports = router;
