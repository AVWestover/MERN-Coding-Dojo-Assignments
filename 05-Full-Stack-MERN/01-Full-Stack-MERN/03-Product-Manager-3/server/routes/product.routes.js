const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    //show all products page W/ form
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProduct);
    //show one product by id
    app.get('/api/products/:id', ProductController.getProduct);
    //Update route
    app.put('/api/products/:id', ProductController.updateProduct);
    //delete route
    app.delete('/api/products/:id', ProductController.deleteProduct);
    //
}

