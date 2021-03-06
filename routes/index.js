var express = require('express');
var router = express.Router();
var Exercise = require('../models/Exercise');
var Workout = require('../models/Workout');
var User = require('../models/User');
var _ = require('underscore');

var AccountSid = process.env.ACCOUNT_SID;
var AuthToken = process.env.AUTHTOKEN;
var fromPhone = process.env.FROM_PHONE;
var twilio = require('twilio')(AccountSid, AuthToken);

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
	var numExers;
	console.log(req.body)
	Exercise.find(function(err, exercises) {
		var muscleArray = [];
		var equipment = [];
		var exerciseArray = [];
		var mToE = false;
		// if (!req.body.muscles) {
		// 	muscleArray.push("Quads")
		// 	muscleArray.push("Hamstrings")
		// }
		for (var key in req.body) {
			if (key === 'break') {
				mToE = true;
				continue;
			}
			if(parseInt(key)) {
				numExers = parseInt(key)
				continue;
			}
			if (mToE) {
				equipment.push(key)
			} else {
				muscleArray.push(key)
			}
		}
		if (err) return next(err)
		var arr = [];
		for (var i = 0; i < muscleArray.length; i++) {
			arr.push([]);
		}
		for (var i = 0; i < exercises.length; i++) {
			for (var j = 0; j < muscleArray.length; j++) {
				for (var k = 0; k < exercises[i].muscles.length; k++) {
					if ((exercises[i].muscles[k] === muscleArray[j]) && (Object.hasOwnProperty.call(req.body, exercises[i].equipment)|| Object.hasOwnProperty.call(req.body, 'gym') || exercises[i].equipment === 'Body Only')) {
						arr[j].push(exercises[i]);
					}
				}

			}
		}
		var workout = [];
		if (!numExers) {
			numExers = 3;
		}
		//arr.length is number of muscle groups
		for (var i = 0; i < arr.length; i++) {
			//sets is the number of exercises per muscle
			var temp = _.shuffle(arr[i]);
			for (var j = 0; j < numExers; j++) {
				var e = temp.pop();
				if (e) {
					workout.push(e);
					exerciseArray.push(e._id)
				}
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
			res.render('workout', {workout: workout, id: newWorkout._id, muscles: muscleArray, equipment: equipment, areWorkouts: workout.length, num: numExers});
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
      overall: workout,
			workout: workout.exercises
		})
	})
})

router.post('/deleteWorkout', function(req, res, next) {
	var updatedWorkouts = [];

	for (var i = 0; i < req.user.workouts.length; i++) {
		console.log(req.user.workouts[i]._id, req.body.id)
		if (JSON.stringify(req.user.workouts[i]._id) !== JSON.stringify(req.body.id)) {
			updatedWorkouts.push(req.user.workouts[i]);
		} else console.log("deleted");
	}
	console.log(updatedWorkouts);
	User.findById(req.user.id, function(err, user) {
		user.workouts = updatedWorkouts;
		user.save(function(err) {
			if (err) console.log(err);
			res.redirect('/profile')
		})
	})
})

router.post('/savedWorkout', function(req, res, next){
	Workout.findById(req.query.workout, function(err, workout) {
		workout.exercises
		var textBody = "Your workout for " + workout.name + ": ";
		workout.exercises.forEach(function(exercise){
					textBody += (exercise.name + ", ");
		});
		var str = textBody.substring(0, textBody.length-2);
		twilio.messages.create({
			to: '+14149435013',
			from: fromPhone,
			body: str
		}, function(err, message){
			res.render('savedWorkout', {
				message: message,
	      overall: workout,
				workout: workout.exercises
			});
		});
	});
});


router.get('/browser', function(req, res, next) {
	Exercise.find(function(err, exercises) {
		console.log(exercises);
		res.render('browser', {exercises: exercises});
	})
})

router.post('/browser', function(req, res, next) {
	Exercise.find(function(err, exercises) {
		var workout = [];
		var muscleArray = [];
		var equipment = [];
		for (var key in req.body) {
			for (var j = 0; j < exercises.length; j++) {
				if (key === exercises[j].name) {
					workout.push(exercises[j]);
					if (muscleArray.indexOf(exercises[j].muscles[0]) < 0) {
						muscleArray.push(exercises[j].muscles[0]);
					}
					if (equipment.indexOf(exercises[j].equipment) < 0) {
						equipment.push(exercises[j].equipment);
					}
				}
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
			res.render('workout', {workout: workout, id: newWorkout._id, muscles: muscleArray, equipment: equipment, areWorkouts: workout.length});
		})
	})
})

router.post('/replace', function(req, res, next) {
	var equipmentArray = req.body.equipment.split(",")
	equipmentArray.push('Body Only')
	if (equipmentArray.indexOf('gym') > -1) {
		Exercise.find({muscles: req.body.muscles}, function(err, exercises) {
			if (err) console.log(err);
			var exercise = exercises[Math.floor((Math.random() * exercises.length))]
			res.send(exercise)
		})
	}
	Exercise.find({muscles: req.body.muscles, equipment: {$in: equipmentArray}}, function(err, exercises) {
		if (err) console.log(err);
		console.log(exercises)
		var exercise = exercises[Math.floor((Math.random() * exercises.length))]
		res.send(exercise)
	})

})

module.exports = router;
