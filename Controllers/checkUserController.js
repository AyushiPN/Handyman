const checkUser = async(req,res) =>{
    console.log("hello g");
    if(req.session.isAuth)
    {
        console.log(req.session.name);
        const obj = new Object();
        obj.name = req.session.name;
        res.send({name :req.session.name});
    }
    else 
    {
        console.log("Not Have Name");
        res.status(404).json({name : "not found"});
    }
}
module.exports = {checkUser}