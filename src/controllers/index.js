var express = require('express');
var wpi = require('wiring-pi');
var router = express.Router();

router.get('/', function (req, res) {

	var status0 = wpi.digitalRead(0);
	var status1 = wpi.digitalRead(1);

	var returnObj = [{
		light: 0,
		status: status0
	}, {
		light: 1,
		status: status1
	}];

	sendResp(res, returnObj);
});

router.post('/light', auth, function (req, res) {
	var selectedLight = req.light.id;
	var lightStatus = req.light.status;

	wpi.pinMode(selectedLight, 'OUTPUT');

	var writeValue = 'HIGH';
	if (lightStatus === 0) {
		writeValue = 'LOW';
	}
	wpi.digitalWrite(selectedLight, lightStatus);
	lightStatus = wpi.digitalRead(selectedLight);
	sendResp(res, {
		light: selectedLight,
		status: lightStatus
	})
})

var sendResp = function (res, jsonObj) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(jsonObj));
}
module.exports = router;