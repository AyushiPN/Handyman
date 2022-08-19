const express = require("express");
const app = express();
require("./db/connection");

const cookieParser =require('cookie-parser');
const sessions = require('express-session');
const check =require('./models/checkUserModel');
const regRoutes = require('./Routes/regRoutes');
const logRoutes = require('./Routes/logRoutes');
const bodyparser = require('body-parser');

app.use(express.json());

app.use(bodyparser.json());

app.get('/',(req,res) =>{
    res.send("<H1> Hello Home Page");
});

app.use('/',regRoutes);
//app.use('/',logRoutes);
app.post('/log',async (req,res) =>{
    try
    {
        const {username ,password} = req.body;
        console.log(username);
        console.log(password);
        
        if(await check.checkuserpass(username,password))
        {
            
            res.status(200).json({error : "Login successfully"});
        }
        else
        {
            
            res.status(404).json({error : "Invalid Credential"});
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(400);

    }
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
