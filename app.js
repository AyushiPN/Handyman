const express = require("express");
const app = express();
require("./db/connection");
const path = require('path');
const cookieParser =require('cookie-parser');
const sessions = require('express-session');
const MongoDBsession = require("connect-mongodb-session")(sessions);
const check =require('./models/checkUserModel');
const regRoutes = require('./Routes/allRoutes');
const bodyparser = require('body-parser');
var session=require('express-session');


const mongodburi = "mongodb+srv://Yash:HandyMan@cluster0.ybe2pq5.mongodb.net/?retryWrites=true&w=majority";

const store = new MongoDBsession({
    uri : mongodburi,
    collection : "mySession"
})


app.use(session({
    secret : "this is key",
    resave : false,
    saveUninitilaized :false,
    store : store
}));

app.use(express.json());
app.use(bodyparser.json());
app.use('/',regRoutes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
