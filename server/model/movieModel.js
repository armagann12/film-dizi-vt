const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    describtion: String,
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }]

})

const Movie = mongoose.model("Movie", movieSchema)

module.exports= Movie