var express = require('express');
var router = express.Router();
var Exercise = require('../models/Exercise');
var Workout = require('../models/Workout');
var User = require('../models/User')
var _ = require('underscore')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('selector', {user: req.user});
});

router.post('/', function(req, res, next) {
	Exercise.find(function(err, exercises) {
		console.log(req.body)
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

router.post('/save', function(req, res, next) {
	var muscles = []
	for (var i = 0; i < req.body.workout.length; i++) {
		for (var j = 0; j < req.body.workout[i].muscles.length; j++) {
			if (muscles.indexOf(req.body.workout[i].muscles[j]) < 0) {
				muscles.push(req.body.workout[i].muscles[j])
			}
		}

	}
	var newWorkout = Workout({
		name: req.body.name,
		targetMuscles: muscles,
		exercises: req.body.workout
	})
	newWorkout.save(function(err) {
		if (err) return next(err);
		User.findById(req.user.id, function(err, user) {
			if (err) return next(err);
			user.workouts.push(newWorkout)
			user.save(function(err) {
				if (err) return next(err);
				res.redirect('/profile')
			})
		})
	})
	
})

router.get('/profile', function(req, res, next) {
	res.render('profile', req.user);
})
module.exports = router;
