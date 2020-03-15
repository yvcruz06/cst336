const express = require("express");
const app = express();
app.engine('html',require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/",function(req,res){
    res.render("index.html");
});

app.get("/mercury",function(req,res){
    res.render("mercury.html");
});

app.get("/venus",function(req, res) {
    res.render("venus.html");
});

app.get("/jupiter",function(req,res){
    res.render("jupiter.html");
});

app.get("/saturn",function(req, res) {
    res.render("saturn.html");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});

