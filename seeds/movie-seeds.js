const { Movie, Actor } = require('../models');

const movieData = [
  {
    title: 'The Avengers',
    release_date: '2012-05-04',
    // actors: [1,2]
  },
  {
    title: 'The Avengers: Age of Ultron',
    release_date: '2015-05-01',
    // actors: [1,2]
  },
  {
    title: 'The Avengers: Infinity War',
    release_date: '2018-04-27',
    // actors: [1,2]
  },
  {
    title: 'The Avengers: Endgame',
    release_date: '2019-04-26',
    // actors: [1,2]
  }
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;