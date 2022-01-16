const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    name: String,
    describtion: String,
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
})

const Actor = mongoose.model("Actor", actorSchema)

module.exports= Actor