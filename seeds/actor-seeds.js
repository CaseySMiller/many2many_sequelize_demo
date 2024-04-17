const { Actor, Movie, Actor_Movie } = require("../models");

// define actor data as an array of objects
const actorData = [
  {
    name: "Robert Downey Jr.",
    birth_date: "1965-04-04",
    movies: [
      { id: 1, performance_rating: 5, character_name: "Tony Stark" },
      { id: 2, performance_rating: 4, character_name: "Kirk Lazarus" },
    ],
  },
  {
    name: "Chris Evans",
    birth_date: "1981-06-13",
    movies: [{ id: 1 }, { id: 2 }],
  },
  {
    name: "Dough Boy",
    birth_date: "1981-06-13",
    movies: [{ id: 1 }, { id: 3 }],
  },
];

//seed actors and set up associations
const seedActors = async () => {
  for (const actor of actorData) {
    // create a new actor for each object in the actorData array
    const newActor = await Actor.create(actor);
    // if there's movie data, loop over it and create the association in actor_movie table
    if (actor.movies) {
      for (const movie of actor.movies) {
        // build the association data
        const newAssociation = {
          actorId: newActor.id, // this column is named actor_id in the table
          movieId: movie.id, // this column is named movie_id in the table
        };
        // if there's additional data for the association, add it to the object
        if (movie.performance_rating) {
          newAssociation.performance_rating = movie.performance_rating
        }
        if (movie.character_name) {
          newAssociation.character_name = movie.character_name
        }
        // create the new association in actor_movie table for each id in the movies array
        const newActorMovie = await Actor_Movie.create(newAssociation);
        console.log( newActorMovie.get({ plain: true }) );
      }
    }
  }
};

//seed an actor and a movie while setting up the relationship at the same time
const seedActorAndMovie = async () => {
  await Actor.create(
    {
      name: "Bob Jenkins",
      birth_date: "1980-02-29",
      // we can add a movie and automatically associate it like this
      movies: [
        {
          title: "Seed This!",
          release_date: "2012-05-04",
          // we can add info to the through table like this
          actor_movie: {
            character_name: "Bob",
            performance_rating: 5,
          },
        },
      ],
    },
    {
      include: Movie,
    }
  );
};

module.exports = { seedActorAndMovie, seedActors };
