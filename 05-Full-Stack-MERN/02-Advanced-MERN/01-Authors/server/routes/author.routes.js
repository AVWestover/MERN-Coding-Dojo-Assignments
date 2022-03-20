const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    //show all authors page W/ form
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    //show one author by id
    app.get('/api/authors/:id', AuthorController.getAuthor);
    //Update route
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    //delete route
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    //
}
