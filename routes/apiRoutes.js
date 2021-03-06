const { request } = require('express');
const express = require('express');
const router  = express.Router();
const requests = require('request');
const database = require('../public/scripts/database');

module.exports = (db) => {
  router.get("/movies", (req, res) => {
    const requestOptions = {
      url: 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies',
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2c637a1079msha9d728c69ee5dfep1d7adfjsn129040aa0881',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };
    requests(requestOptions, (err, response, body) => {
      if (err) {
        console.log(err);
      } else if (response.statusCode === 200) {
        const movies = JSON.parse(body);
        const sliced = Object.keys(movies).slice(0, 4).reduce((result, key) => {
          result[key] = movies[key];
          return result;
        }, {});
        for (const key of Object.keys(sliced)) {
          const requestOptions = {
            url: 'https://imdb8.p.rapidapi.com/title/get-meta-data',
            method: 'GET',
            qs: {
              ids: sliced[key].id.slice(7,16)
            },
            headers: {
              'x-rapidapi-key': '2c637a1079msha9d728c69ee5dfep1d7adfjsn129040aa0881',
              'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
          };
          requests(requestOptions, (err, response, body) => {
            if (err) {
              console.log(err);
            } else if (response.statusCode === 200) {
              const details = JSON.parse(body);
              console.log(details[sliced[key].id.slice(7,16)].title.title, details[sliced[key].id.slice(7,16)].ratings.rating, details[sliced[key].id.slice(7,16)].genres[0], details[sliced[key].id.slice(7,16)].title.image.url);
            } else {
              console.log(response.statusCode);
            }
          });
        }
      } else {
        console.log(response.statusCode);
      }
    });
  });

  router.post("/movies", (req, res) => {
    const title = "The Amazing Spiderman";
    const rating = 5;
    const genre = "Superhero";
    const url = "https://upload.wikimedia.org/wikipedia/en/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg";
    const movie = {title, rating, genre, url};
    const list = {user_id:1, id: 1, due_date: "2021-10-31"};
    database.addMovie(movie, list)
      .then(console.log('Movie task added!'));
  });

  router.get("/products", (req, res) => {
    const requestOptions = {
      url: 'https://fakestoreapi.com/products?limit=5',
      method: 'GET',
    };
    requests(requestOptions, (err, response, body) => {
      if (err) {
        console.log(err);
      } else if (response.statusCode === 200) {
        const products = JSON.parse(body);
        for (const product of products) {
          console.log(product.title, product.price, product.image, product.category);
        }
      } else {
        console.log(response.statusCode);
      }
    });
  });

  router.get("/lists", (req, res) => {
    database.listList()
      .then(lists =>
        console.log(lists));
  });
  return router;
};
