var express = require('express');
var wpi = require('wiring-pi');

var app = express();
app.use(require('./controllers'));
var port = 5000;

app.get('/gpio', function (req, res) {
	var test = {
		prop1: "test1",
		prop2: "test2"
	}
	res.send(test);
});

app.listen(5000, function (err) {

	wpi.wiringPiSetup();

	console.log('running server on port ' + port);
});