/*
//const express = require('express');
//const router = express.Router();
const itemController = require("./../controller/itemController")

router
    .route("/")
    .get(itemController.getAllItems)
    .post(itemController.createItem)

router  
    .route("/:id")
    .get(itemController.getItem)
    //satıldı yapmak için .patch

router
    .route("/asd")
    .get(itemController.getItemByType)

router  
    .route("/sold")
    .get(itemController.getItemSold)

module.exports = router;


*/