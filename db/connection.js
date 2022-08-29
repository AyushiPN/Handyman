const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Yash:HandyMan@cluster0.ybe2pq5.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser : true,
    
}).then(() => {
    console.log('connection success');
}).catch((e) => {
    console.log('connection failed');
});
