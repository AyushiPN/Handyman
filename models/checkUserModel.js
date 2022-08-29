const model = require('./addUserModel');
module.exports = {
    checkEmail :async (data) => {
        if(await model.findOne({email : data}) == null)
        {
            return false;
        }
        else
        {
            return true;
        }
       
    },
    checkUserName : async(data) => {
        if(await model.findOne({username : data}) == null)
        {
            return false;
        }
        else
        {
            return true;
        }
    },
    checkuserpass : async(user,pass) =>
    {
        //console.log(await model.findOne({username : user,password : pass}))
        if(await model.findOne({username : user,password : pass})== null)
        {
            return false;
        }
        else
        {
            return true;
        }
    },
    getName : async(username) =>
    {
        const  obj = await model.findOne({username : username});
        return obj.name;
    }
};