const router = require('express').Router();
const { Movie, Actor } = require('../../models');

// GET all movies -- /api/movies
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

// GET a single movie -- /api/movies/:id
router.get('/:id', (req, res) => {
  Movie.findOne({
    where: {
      id: req.params.id
    },
    include: [Actor]
  })
    .then(dbMovieData => {
      if (!dbMovieData) {
        res.status(404).json({ message: 'No movie found with this id' });
        return;
      }
      res.json(dbMovieData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Add a movie -- /api/movies
router.post('/', (req, res) => {
  Movie.create({
    title: req.body.title,
    release_date: req.body.release_date,
  })
    .then(dbMovieData => res.json(dbMovieData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a movie -- /api/movies/:id
router.put('/:id', (req, res) => {
  Movie.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbMovieData => {
      if (!dbMovieData[0]) {
        res.status(404).json({ message: 'No movie found with this id' });
        return;
      }
      Movie.findOne({
        where: {
          id: req.params.id
        },
        include: [Actor]
      })
        .then(dbMovieData => {
          res.json(dbMovieData);
        });
      // res.json(dbMovieData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a movie -- /api/movies/:id
router.delete('/:id', (req, res) => {
  Movie.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbMovieData => {
      if (!dbMovieData) {
        res.status(404).json({ message: 'No movie found with this id' });
        return;
      }
      console.log(dbMovieData);
      res.json({ message: 'Movie deleted' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;