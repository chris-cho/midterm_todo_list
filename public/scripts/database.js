//this should be triggered on the click of the ADD button for a movie task
const addMovie = function(movie) {
  const queryString = `
  INSERT INTO products (rating, director, title, genre, url)
  VALUES
    ($1, $2, $3, $4, $5);`;
  const params = [movie.rating, movie.director, movie.title, movie.genre, movie.url];
  return pool.query(queryString, params)
    .then(res => res.rows);
};
exports.addMovie = addMovie;

const delMovie = function(movie_id) {
  const queryString = `
  DELETE FROM movies
  WHERE id = $1;`;
  const params = [movie_id];
  return pool.query(queryString, params)
    .then(res => res.rows);
};
exports.delMovie = delMovie;

const viewMovie = function(movie_id) {
  const queryString = `
  SELECT * FROM movies
  WHERE id = $1;`;
  const params = [movie_id];
  return pool.query(queryString, params)
    .then(res => res.rows);
};
exports.viewMovie = viewMovie;
