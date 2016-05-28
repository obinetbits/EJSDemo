var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/posts", function(req, res){
    var posts =[
        {tittle: "Never forget", author: "Susy"},
        {tittle: "My cute car", author: "Benny"},
        {tittle: "Where I live", author: "Heiskey"}
        ];
        
        res.render("posts.ejs", {posts: posts})
});

//fallinlovewith/rusty
app.get ("/fallinginlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is Running"); 
});