const Actor = require("./../model/actorModel")

exports.getActor = async (req, res) =>  {
    try{
        const actor= await Actor.findById(req.params.id)
        res.json(actor);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

exports.createActor = async (req, res) => {
    const actor =new Actor({
        name: req.body.name,
        describtion: req.body.describtion,
        movies:[req.body.movies]
    });
    try{
        const newactor= await actor.save()
        res.status(201).json(newactor)
    }
    catch(err) {
        res.status(400).json(err.message);
    };
}

exports.getAllActors = async (req, res) =>  {
    try{
        const actor= await Actor.find()
        res.json(actor);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};
