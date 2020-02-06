/* eslint-disable object-shorthand */
const { Product, Order } = require("../models");

module.exports = function(app) {
  app.get("/product", function(req, res) {
    Product.findAll({}).then(products => {
      products = products.map(product => product.toJSON());
      res.render("product", { products });
    });
  });

  app.get("/api/product/:product", function(req, res) {
    Product.findOne({
      where: {
        name: req.params.product,
      },
    }).then(product => res.json(product));
  });

  app.post("/api/products", function(req, res) {
    console.log(req.body);

    Product.create(req.body).then(product => res.json(product));
  });

  app.delete("/api/products/:id", function(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then(product => res.json(product));
  });
};
