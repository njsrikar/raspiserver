var express = require('express');

var app = express();

var port = 5000;

app.get('/gpio', function (req, res) {
	var test = {
		prop1: "test1",
		prop2: "test2"
	}
	res.send(test);
});

app.listen(5000, function (err) {
	console.log('running server on port ' + port);
});