const Product = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((product) => res.json({ products: product }))
    .catch((err) => res.json(err));
};

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};

module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params._id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json(err));
};

module.exports.destroyProduct = (req, res) => {
  Product.deleteOne({ _id: req.params._id })
    .then((confirmDelete) => res.json(confirmDelete))
    .catch((err) => res.json(err));
};
