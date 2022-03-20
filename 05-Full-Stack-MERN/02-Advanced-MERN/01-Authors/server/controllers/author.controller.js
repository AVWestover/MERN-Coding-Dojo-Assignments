const Author = require('../models/author.model'); 
module.exports.index = (request, response) => {
    response.json({
        message: "Connection Established"
    });
}
          /* The method below is new */
module.exports.createAuthor = (request, response) => {
    // Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Author.create(request.body) //This will use whatever the body of the client's request sends over
        .then(newAuthor => response.json(newAuthor))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllAuthors = (request, response) => {
    //get all method using product.find
    Author.find({})
        .then(allAuthors => {
            console.log(allAuthors); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(allAuthors);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getAuthor = (request, response) => {
    //get one product using product.findOne
    Author.findOne({ _id: request.params.id })
        .then((oneAuthor) => response.json(oneAuthor))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    //update product
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    //DELETE a product
    Author.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
