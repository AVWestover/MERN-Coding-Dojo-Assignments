const Product = require('../models/product.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Connection Established"
    });
}
          /* The method below is new */
module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(newProduct => response.json(newProduct))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    //get all method using product.find
    Product.find({})
        .then(allProducts => {
            console.log(allProducts); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(allProducts);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getProduct = (request, response) => {
    //get one product using product.findOne
    Product.findOne({ _id: request.params.id })
        .then((oneProduct) => response.json(oneProduct))
        .catch(err => response.json(err))
}

