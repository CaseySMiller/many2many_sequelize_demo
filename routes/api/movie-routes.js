const router = require('express').Router();
const { Movie, Actor } = require('../../models');

// GET all movies
router.get('/', (req, res) => {
  Movie.findAll({
    include: [Actor]
  })
    .then(dbMovieData => res.json(dbMovieData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;