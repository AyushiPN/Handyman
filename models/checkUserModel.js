const model = require('./addUserModel');
module.exports = {
    check :async (data) => {
        const email =await model.find({email : data});
        return email;
    }
}