const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/HandyMan" , {
    useNewUrlParser : true,
    
}).then(() => {
    console.log('connection success');
}).catch((e) => {
    console.log('connection failed');
});
