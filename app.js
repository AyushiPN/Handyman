const express = require("express");
const app = express();

app.post("/post", (req, res) => {
console.log("Connected to React");
res.redirect("/");
});

app.get("/" , (req,res) =>{
    res.send("hello this is response ");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
