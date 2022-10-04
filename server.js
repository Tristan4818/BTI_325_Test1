var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}


app.get("/", function(req, res){
    let resText = "<h2> Declaration: </h2>"
    resText += " <p> I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source </p>"
    resText += "<p> Name: <mark><b>Tristan Mendez-Smith </b></mark></p> "
    resText += "<p> Student Number: <mark><b>143368215 </b></mark></p> "
    resText += "<a href = '/test1'> Go to Test1 </a>";
    res.send(resText);
});

app.get("/test1", function(req, res){
        res.sendFile(path.join(__dirname, "/pages/test1.html"))
});

app.listen(HTTP_PORT, onHttpStart);