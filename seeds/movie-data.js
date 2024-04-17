// we are just storing this movie data in a separate file and exporting it so that we can use it in our seeds/movie-seeds.js file. This is a common pattern in larger applications where you might have a lot of seed data to manage. It's a good idea to keep your seed data separate from your seed functions so that you can easily manage and update your seed data without having to dig through your seed functions.
const movieData = [
  {
    title: 'The Avengers',
    release_date: '2012-05-04',
  },
  {
    title: 'The Avengers: Age of Ultron',
    release_date: '2015-05-01',
  },
  {
    title: 'The Avengers: Infinity War',
    release_date: '2018-04-27',
  },
  {
    title: 'The Avengers: Endgame',
    release_date: '2019-04-26',
  }
];

module.exports = movieData;