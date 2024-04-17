const { Actor, Movie, Actor_Movie  } = require('../models');

// define actor data as an array of objects
const actorData = [
  {
    name: 'Robert Downey Jr.',
    birth_date: '1965-04-04',
    movies: [1,2]
  },
  {
    name: 'Chris Evans',
    birth_date: '1981-06-13',
    movies: [1,2]
  }, 
  {
    name: 'Dough Boy',
    birth_date: '1981-06-13',
    movies: [1,3]
  }, 
];

//seed actors and set up associations
const seedActors = async () => {
  for (const actor of actorData) {
    // create a new actor for each object in the actorData array
    const newActor = await Actor.create(actor);
    // if there's movie data, loop over it and create the association in actor_movie table
    if (actor.movies) {
      for (const movieId of actor.movies) {
        // create a new association in actor_movie table for each id in the movies array
        const newAssociation = await Actor_Movie.create({
          actorId: newActor.id, // this column is named actor_id in the table
          movieId: movieId, // this column is named movie_id in the table
        });
        // console.log(newAssociation.get({ plain: true });
      }
    }
  }
}

//seed an actor and a movie while setting up the relationship at the same time
const seedActorAndMovie = async () => {
  await Actor.create(
    {
      name: 'Bob Jenkins',
      birth_date: '1980-02-29',
      movies: [
        {
          title: "Seed This!",
          release_date: '2012-05-04',
        },
      ]
    },
    {
      include: Movie,
    }
  );
}

module.exports = {seedActorAndMovie, seedActors};  

