const Movie = require("../model/movieModel")

exports.getMovie = async (req, res) =>  {
    try{
        const movie= await Movie.findById(req.params.id).populate("actors")
        res.json(movie);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

exports.createMovie = async (req, res) => {
    const movie =new Movie({
        name: req.body.name,
        describtion: req.body.describtion,
        actors: [req.body.actors]
    });
    try{
        const newmovie= await movie.save()
        res.status(201).json(newmovie)
    }
    catch(err) {
        res.status(400).json(err.message);
    };
}

exports.getAllMovies = async (req, res) =>  {
    try{
        const movie= await Movie.find()
        res.json(movie);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};
