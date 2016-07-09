var express = require('express');
var router = express.Router();
var Exercise = require('../models/Exercise');
var _ = require('underscore')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('selector', {user: req.user});
});

router.post('/', function(req, res, next) {
	Exercise.find(function(err, exercises) {
		if (err) return next(err)
		var arr = [];
		for (var i = 0; i < req.body.muscles.length; i++) {
			arr.push([]);
		}
		for (var i = 0; i < exercises.length; i++) {
			for (var j = 0; j < req.body.muscles.length; j++) {
				for (var k = 0; k < exercises[i].muscles.length; k++) {
					if (exercises[i].muscles[k] === req.body.muscles[j] && (req.body.equipment.indexOf(exercises[i].equipment) >= 0 || req.body.equipment[req.body.equipment.length - 1])) {
						arr[j].push(excercises[i]);
					}
				}
				
			}
		}
		var sets = 12 / req.body.muscles.length;
		var workout = [];
		for (var i = 0; i < arr.length; i++) {
			var temp = _.shuffle(arr[i]);
			for (var j = 0; j < sets; j++) {
				workout.push(temp.pop());
			}
		}
		res.render('workout', {workout: workout});
	})
});

module.exports = router;
