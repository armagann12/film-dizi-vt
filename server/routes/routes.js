const express = require('express');
const router = express.Router();
const movieController = require("./../controller/movieController")
const actorController = require("./../controller/actorController")


router 
    .route("/movie/:id")
    .get(movieController.getMovie)

router
    .route("/actor/:id")
    .get(actorController.getActor)

router
    .route("/movie")
    .post(movieController.createMovie)

router
    .route("/actor")
    .post(actorController.createActor)

router
    .route("/movie")
    .get(movieController.getAllMovies)

router
    .route("/actor")
    .get(actorController.getAllActors)


module.exports = router;