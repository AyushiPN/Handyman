const check = require("../models/checkUserModel");
const log = async (req,res) =>{
    console.log("error");
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
};
module.exports ={log};