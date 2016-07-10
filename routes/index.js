var express = require('express');
var router = express.Router();
var Exercise = require('../models/Exercise');
var Workout = require('../models/Workout');
var User = require('../models/User')
var _ = require('underscore')

/* GET home page. */
router.use(function(req, res, next) {
	if (!req.user) {
		res.redirect('/login')
	} else {
		return next()
	}
})

router.get('/', function(req, res, next) {
  res.render('selector', {user: req.user});
});

router.post('/', function(req, res, next) {
	console.log(req.body)
	Exercise.find(function(err, exercises) {
		var muscleArray = [];
		var equipment = [];
		var exerciseArray = [];
		for (var key in req.body) {
			if (key === 'gym') {
				continue;
			}
			muscleArray.push(key)
		}
		if (err) return next(err)
		var arr = [];
		for (var i = 0; i < muscleArray.length; i++) {
			arr.push([]);
		}
		for (var i = 0; i < exercises.length; i++) {
			for (var j = 0; j < muscleArray.length; j++) {
				for (var k = 0; k < exercises[i].muscles.length; k++) {
					var equip = exercises[i].equipment
					if (equipment.indexOf(equip) < 0) {
						equipment.push(equip)
					}
					if ((exercises[i].muscles[k] === muscleArray[j]) && (Object.hasOwnProperty.call(req.body, equip)|| Object.hasOwnProperty.call(req.body, 'gym'))) {
						arr[j].push(exercises[i]);
					}
				}

			}
		}
		var sets = 12 / muscleArray.length;
		var workout = [];
		for (var i = 0; i < arr.length; i++) {
			var temp = _.shuffle(arr[i]);
			for (var j = 0; j < sets; j++) {
				var e = temp.pop();
				workout.push(e);
				exerciseArray.push(e._id)
			}
		}
		var newWorkout = Workout({
			name: "None yet!",
			targetMuscles: muscleArray,
			exercises: workout,
			equipment: equipment
		})
		newWorkout.save(function(err) {
			if (err) return next(err);
			res.render('workout', {workout: workout, id: newWorkout._id, muscles: muscleArray, equipment: equipment});
		})
	})
});

router.post('/save', function(req, res, next) {
	Workout.findById(req.body.workout, function(err, workout) {
		workout.name = req.body.workoutName;
		workout.save(function(err) {
			if (err) console.log(err);
			User.findById(req.user.id, function(err, user) {
				user.workouts.push(workout)
				user.save(function(err) {
					if (err) console.log(err);
					res.redirect('/profile')
				})
			})
		})
	})
})

router.get('/profile', function(req, res, next) {
	console.log(req.user);
	res.render('profile', {user: req.user});
})

router.get('/savedWorkout', function(req, res, next) {
	Workout.findById(req.query.workout, function(err, workout) {
		console.log(workout);
		workout.exercises
		res.render('savedWorkout', {

			workout: workout.exercises
		})
	})
})

router.get('/browser', function(req, res, next) {
	Exercise.find(function(err, exercises) {
		console.log(exercises);
		res.render('browser', {exercises: exercises});
	})
})
module.exports = router;
