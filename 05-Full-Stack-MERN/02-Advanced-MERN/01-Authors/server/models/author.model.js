const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [
            true,
            "Author's name is required"
        ] },
        
//"timestamps" adds updated at and created at when set to true
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
