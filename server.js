const express = require("express");
const path = require('path')
const app = express();

app.use(express.static(__dirname +"/build"))

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/build/index.html")
})

app.listen(4000, () =>{
    console.log("app listening on port 5000")
})