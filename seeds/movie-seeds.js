const { Movie, Actor } = require('../models');
// we are storing our seed data in a seperate file and exporting it so that we can use it in our seed functions
// this can also be done with json files but we would have to use JSON.parse to convert the json data into a javascript object
const movieData = require('./movie-data');

const seedMovies = () => Movie.bulkCreate(movieData);


// seeds a movie and an actor and associates them
const seedMovieAndActor = async () => {
  // create a new movie
  const newMovie = await Movie.create({
    title: 'Scent of a Woman',
    release_date: '1992-12-23',
  });
  // create a new actor
  const newActor = await Actor.create({
    name: 'Al Pacino',
    birth_date: '1940-04-25',
  });
  // sequelize creates this .addActor method for us and we can use it to associate newActor with the newMovie without directly accessing the Actor_Movie model
  await newMovie.addActor(newActor);
};


module.exports = {seedMovies, seedMovieAndActor};