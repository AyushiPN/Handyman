const register = require('../models/addUserModel');
const check =require('../models/checkUserModel');

const reg = async(req, res, next) => {
    try{

        const {name ,email,number,username,password} =req.body;
        if(await check.checkEmail(email) )
        {
            res.status(422).json({error : "Email already Exits"});
        }
        else if(await check.checkUserName(username))
        {
            res.status(423).json({error : "UserName already Exits"});
        }
        else
        {
            const registeruser = new register({
                name : name,
                email : email,
                number : number,
                username : username,
                password : password
    
            });
            const registered= await registeruser.save();
            res.status(201).json({});             
        }
        
    }
    catch(error)
    {
        res.status(400).send(error);
    }

};
module.exports = {reg};