const express = require("express");
const path = require("path");
const logger = require("morgan");
const parser = require("body-parser");

const random = require("./services/randomize-services")


const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req,res){
	let string = "Numbers are: "
	for (let i = 0; i < 10; i++ ){
		let rand = random.randomNum()
		console.log("hello: " + i + rand)
		string = string + rand + ", "
	}
	res.send(string)
})

app.listen(port, function(){
	console.log(`live on port ${port}`)
})
