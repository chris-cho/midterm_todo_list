require("dotenv").config();
const { Pool } = require("pg");
const dbParams = require("../../lib/db.js");
const db = new Pool(dbParams);
db.connect();

//this should be triggered on the click of the ADD button for a movie task
const addMovie = function(movie, list) {
  const queryString = `
  INSERT INTO products (rating, director, title, genre, url)
  VALUES
    ($1, $2, $3, $4, $5);

  INSERT INTO tasks (user_id, list_id, date_created, due_date)
  VALUES
    ($6, $7, $8, $9);

  INSERT INTO tasks (activity_id)
  SELECT id FROM products WHERE title = $3;`;

  const params = [movie.rating, movie.director, movie.title, movie.genre, movie.url, list.user_id, list.id, list.due_date];
  return db.query(queryString, params)
    .then(res => res.rows);
};
exports.addMovie = addMovie;

const delMovie = function(movie_id) {
  const queryString = `
  DELETE FROM movies
  WHERE id = $1;`;
  const params = [movie_id];
  return db.query(queryString, params)
    .then(res => res.rows);
};
exports.delMovie = delMovie;

const viewMovie = function(movie_id) {
  const queryString = `
  SELECT * FROM movies
  WHERE id = $1;`;
  const params = [movie_id];
  return db.query(queryString, params)
    .then(res => res.rows[0]);
};
exports.viewMovie = viewMovie;

const addProduct = function(product) {
  const queryString = `
  INSERT INTO products (rating, name, category, price, url)
  VALUES
    ($1, $2, $3, $4, $5);

  INSERT INTO tasks (user_id, list_id, date_created, due_date)
  VALUES
    ($6, $7, $8, $9);

  INSERT INTO tasks (activity_id)
  SELECT id FROM products WHERE name = $2;`;

  const params = [product.rating, product.name, product.category, product.price, product.url, list.user_id, list.id, list.due_date];
  return db.query(queryString, params)
    .then(res => res.rows);
};
exports.addProduct = addProduct;

const delProduct = function(product_id) {
  const queryString = `
  DELETE FROM products
  WHERE id = $1;`;
  const params = [product_id];
  return db.query(queryString, params)
    .then(res => res.rows);
};
exports.delProduct = delProduct;

const viewProduct = function(product_id) {
  const queryString = `
  SELECT * FROM products
  WHERE id = $1;`;
  const params = [product_id];
  return pool.query(queryString, params)
    .then(res => res.rows);
};
exports.viewProduct = viewProduct;

const addList = function(list) {
  const queryString = `
  INSERT INTO lists (user_id, name, active, date_created, due_date)
  VALUES
    ($1, $2, $3, $4, $5);`;
  const params = [list.user_id, list.name, list.active, list.date_created, list.due_date];
  return db.query(queryString, params)
    .then(res => res.rows);
};
exports.addList = addList;

const viewList = function(list_id) {
  const queryString = `
  SELECT FROM lists
  WHERE id = $1;`;
  const params = [list_id];
  return db.query(queryString, params)
    .then(res => res.rows);
};
exports.viewList = viewList;

const listList = function() {
  const queryString = `
  SELECT * FROM lists;`;
  return db.query(queryString)
    .then(res => res.rows);
};
exports.listList = listList;

const delList = function(list_id) {
  const queryString = `
  SELECT * FROM lists
  WHERE id = $1;`;
  const params = [list_id];
  return db.query(queryString, params)
    .then(res => res.rows);
};
exports.delList = delList;
