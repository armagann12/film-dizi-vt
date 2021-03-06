const express = require('express')
const mongoose = require('mongoose')
const app = express()
//const itemRouter = require("./routes/itemRoutes")
const bodyParser = require("body-parser")
const xroute = require("./routes/routes")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:3001`)
  })

const serverUrl = process.env.SERVER_URL;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(serverUrl, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use("/home", xroute);


//app.use("/home", itemRouter);
