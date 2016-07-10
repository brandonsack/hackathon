var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
var Exercise = require("./models/Exercise")

//Barbell, dumbbell, cable, pull-up bar, bench, none

var exercises = [
	{name: "Barbell Shrug", equipment: "Barbell", muscles: "Trapezius"},
	{name:"Dumbbell Shrug", equipment: "Dumbbell",muscles: "Trapezius"},
	{name:"Cable Shrug", equipment: "Cable",muscles: "Trapezius"},
	{name:"Chin-Up",equipment: "Pull-up Bar",muscles: "Lats"},
	{name:"Cable Pushdown",equipment: "Cable",muscles: "Lats"},
	{name:"Lat Pull-down",equipment: "Cable",muscles: "Lats"},
	{name:"Bench Dips",equipment: "Bench",muscles: "Triceps"},
	{name:"Tricep Push-up",equipment: "None",muscles: "Triceps"},
	{name:"Tricep Extension",equipment: "Cable",muscles: "Triceps"},
	{name:"Butt Lift",equipment: "None",muscles: "Glutes"},
	{name:"Flutter Kicks",equipment: "None",muscles: "Glutes"},
	{name:"Kneeling Jump Squat",equipment: "Barbell",muscles: "Glutes"},
	{name:"Farmer's Walk",equipment: "Dumbbell",muscles: "Forearms"},
	{name:"Cable Wrist Curl",equipment: "Cable",muscles: "Forearms"},
	{name:"Dumbbell Wrist Curl",equipment: "Dumbbell",muscles: "Forearms"},
	{name:"Leg Curls",equipment: "Machine",muscles: "Hamstrings"},
	{name:"Romanian Deadlift",equipment: "Barbell",muscles: "Hamstrings"},
	{name:"One-legged Romanian Deadlift",equipment: "Dumbbell",muscles: "Hamstrings"},
	{name:"Standing Calf Press",equipment: "Machine",muscles: "Calves"},
	{name:"Seated Calf Press",equipment: "Machine",muscles: "Calves"},
	{name:"Barbell Calf Press",equipment: "Barbell",muscles: "Calves"},
	{name:"Barbell Squat",equipment: "Barbell",muscles: "Quads"},
	{name:"Dumbbell Squat",equipment: "Dumbbell",muscles: "Quads"},
	{name:"Dumbbell Lunge",equipment: "Dumbbell",muscles: "Quads"},
	{name:"Thigh Adductor",equipment: "Machine",muscles: "Adductors"},
	{name:"Lateral Cone Hops",equipment: "None",muscles: "Adductors"},
	{name:"Side Leg Raises",equipment: "None",muscles: "Adductors"},
	{name:"Medicine Ball Throw",equipment: "Medicine Ball",muscles: "Obliques"},
	{name:"Barbell Twist",equipment: "Barbell",muscles: "Obliques"},
	{name:"Bicycle Crunches",equipment: "None",muscles: "Obliques"},
	{name:"Crunches",equipment: "None",muscles: "Abs"},
	{name:"Sit-ups",equipment: "None",muscles: "Abs"},
	{name:"Jackknife Sit-ups",equipment:"None", muscles:"Abs"},
	{name:"Barbell Bench Press",equipment: "Barbell",muscles: "Pectorals"},
	{name:"Dumbbell Bench Press",equipment: "Dumbbell",muscles: "Pectorals"},
	{name:"Incline Bench Press",equipment: "Dumbbell",muscles: "Pectorals"},
	{name:"Dumbbell Lateral Raises",equipment: "Dumbbell",muscles: "Deltoids"},
	{name:"Bent Over Row",equipment: "Dumbbell",muscles: "Deltoids"},
	{name:"One-arm Rows",equipment: "Dumbbell",muscles: "Deltoids"},
	{name:"Dumbell Curls",equipment: "Dumbbell",muscles: "Biceps"},
	{name:"Barbell Curls",equipment: "Barbell",muscles: "Biceps"},
	{name:"Hammer Curls",equipment: "Dumbbell",muscles: "Biceps"},
]
exercises.forEach(function(exercise){
	var newExercise = Exercise({
		name: exercise.name,
		equipment: exercise.equipment,
		muscles:exercise.muscles
	})
	newExercise.save(function(err){
		if(err){
			console.log(err)
		} else {
			console.log("saved product");	
		}
	})
})