const { request } = require('express');
const express = require('express');
const router  = express.Router();
const requests = require('request');

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
            })
          }
        } else {
          console.log(response.statusCode);
        }
    });
            });
  return router;
};
