//this should be triggered on the click of the ADD button for a product task
const addProduct = function(product) {
  const queryString = `
  INSERT INTO products (rating, name, category, price, url)
  VALUES
    ($1, $2, $3, $4, $5);`;
  const params = [product.rating, product.name, product.category, product.price, product.url];
  return pool.query(queryString, params)
    .then(res => res.rows);
};
exports.addProduct = addProduct;

const delProduct = function(product_id) {
  const queryString = `
  DELETE FROM products
  WHERE id = $1;`;
  const params = [product_id];
  return pool.query(queryString, params)
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
