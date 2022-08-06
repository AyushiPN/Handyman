const express = require("express");
const app = express();
require("./db/connection");
const register = require('./models/addUserModel');


const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({ extended: false }));

app.post("/reg", async(req, res) => {

    try{
        const registeruser = new register({
            name : req.body.name,
            email : req.body.email,
            number : req.body.number,
            username : req.body.username,
            password : req.body.password

        });
        const registered= await registeruser.save();
    }
    catch(error)
    {
        res.status(400).send(error);
    }
    
    
});

app.get("/" , (req,res) =>{

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
