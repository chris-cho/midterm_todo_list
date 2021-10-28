const { request } = require('express');
const express = require('express');
const router  = express.Router();
const requests = require('request');

module.exports = (db) => {
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
        console.log(products[0]);
        for (const product of products) {
          console.log(product.title, product.price, product.image, product.category);
        }
      } else {
        console.log(response.statusCode);
      }
    });
  });
  return router;
};
