const seedMovies = require('./movie-seeds');
const { seedActorAndMovie, seedActors} = require('./actor-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMovies();
  console.log('\n----- Movies SEEDED -----\n');

  await seedActorAndMovie();
  console.log('\n----- Actor and Movie SEEDED -----\n');

  await seedActors();
  console.log('\n----- Actors SEEDED -----\n');

  process.exit(0);
}

seedAll();