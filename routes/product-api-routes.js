const { Product, Order } = require("../models");

module.exports = function(app) {
  app.get("/api/products", function(req, res) {
    Product.findAll({}).then(products => res.json(products));
  });

  app.get("/api/product/:product", function(req, res) {
    Product.findOne({
      where: {
        name: req.params.product,
      },
    }).then(product => res.json(product));
  });

  app.get("/api/product/id/:id", function(req, res) {
    Product.findOne({
      where: {
        id: req.params.id,
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

  app.post("/api/products/update/:id/:quantity", function(req, res) {
    Product.update({quantity: req.params.quantity},{where: {id: req.params.id,}})
      .then(function() {
        console.log(`Product with ID: ${req.params.id} has had its quantity updated to ${req.params.quantity}`)
      })
  });
};
