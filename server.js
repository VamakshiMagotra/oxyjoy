var express = require('express');
var app = express();
var fs = require("fs");
var cors = require("cors");
const path = require('path');

app.use(cors());
app.use(function(req, res, next) { //allow cross origin requests

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");

    res.header("Access-Control-Max-Age", "3600");

    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    next();

});

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('assets'));
//add the router

app.get('/', (req, res) => {
	res.sendFile('index.html',{root: path.join(__dirname)});
	
});


app.listen(process.env.port || 3000);

