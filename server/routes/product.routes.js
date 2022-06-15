const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:_id', ProductController.getOneProduct);
    app.put('/api/product/:_id', ProductController.updateProduct);
    app.delete('/api/product/:_id', ProductController.destroyProduct);
}

