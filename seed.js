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
var exercises2 = [
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2001/Male/m/2001_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2001/Male/m/2001_1.jpg",
    "name": "3/4 Sit-Up",
    "muscles": "Abs",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/225/Male/m/225_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/225/Female/m/225_1.jpg",
    "name": "Ab Crunch Machine",
    "muscles": "Abs",
    "equipment": "Machine"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/110/Male/m/110_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/110/Female/m/110_1.jpg",
    "name": "Ab Roller",
    "muscles": "Abs",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/502/Male/m/502_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/502/Female/m/502_1.jpg",
    "name": "Advanced Kettlebell Windmill",
    "muscles": "Abs",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/209/Male/m/209_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/209/Female/m/209_1.jpg",
    "name": "Air Bike",
    "muscles": "Abs",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/105/Male/m/105_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/105/Female/m/105_2.jpg",
    "name": "Alternate Heel Touchers",
    "muscles": "Abs",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/207/Male/m/207_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/207/Female/m/207_1.jpg",
    "name": "Barbell Ab Rollout",
    "muscles": "Abs",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/206/Male/m/206_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/206/Female/m/206_1.jpg",
    "name": "Barbell Ab Rollout - On Knees",
    "muscles": "Abs",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1961/Male/m/1961_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1961/Male/m/1961_1.jpg",
    "name": "Barbell Rollout from Bench",
    "muscles": "Abs",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/87/Male/m/87_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/87/Female/m/87_1.jpg",
    "name": "Barbell Side Bend",
    "muscles": "Abs",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/196/Male/m/196_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/196/Female/m/196_1.jpg",
    "name": "Bent Press",
    "muscles": "Abs",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/118/Male/m/118_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/118/Female/m/118_1.jpg",
    "name": "Bent-Knee Hip Raise",
    "muscles": "Abs",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/932/Male/m/932_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/932/Female/m/932_1.jpg",
    "name": "Bosu Ball Cable Crunch With Side Bends",
    "muscles": "Abs",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3981/Male/m/3981_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3981/Female/m/3981_1.jpg",
    "name": "Bosu Ball Crunch",
    "muscles": "Abs",
    "equipment": "Exercise Ball"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2021/Male/m/2021_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2021/Male/m/2021_1.jpg",
    "name": "Bottoms Up",
    "muscles": "Abs",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2843/Male/m/2843_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2843/Female/m/2843_1.jpg",
    "name": "Clam",
    "muscles": "Adductors",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3441/Male/m/3441_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3441/Female/m/3441_1.jpg",
    "name": "Fire Hydrant",
    "muscles": "Adductors",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3701/Male/m/3701_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3701/Male/m/3701_1.jpg",
    "name": "Hip Circle",
    "muscles": "Adductors",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/874/Male/m/874_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/874/Female/m/874_1.jpg",
    "name": "Hip Circles (prone)",
    "muscles": "Adductors",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/594/Male/m/594_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/594/Female/m/594_1.jpg",
    "name": "Iliotibial Tract-SMR",
    "muscles": "Adductors",
    "equipment": "Foam Roll"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/598/Male/m/598_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/598/Female/m/598_1.jpg",
    "name": "IT Band and Glute Stretch",
    "muscles": "Adductors",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3721/Male/m/3721_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3721/Female/m/3721_1.jpg",
    "name": "Lateral Band Walk",
    "muscles": "Adductors",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/604/Male/m/604_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/604/Female/m/604_1.jpg",
    "name": "Lying Crossover",
    "muscles": "Adductors",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/903/Male/m/903_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/903/Female/m/903_1.jpg",
    "name": "Monster Walk",
    "muscles": "Adductors",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/873/Male/m/873_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/873/Female/m/873_1.jpg",
    "name": "Standing Hip Circles",
    "muscles": "Adductors",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/154/Male/m/154_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/154/Female/m/154_1.jpg",
    "name": "Thigh Abductor",
    "muscles": "Adductors",
    "equipment": "Machine"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/631/Male/m/631_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/631/Female/m/631_1.jpg",
    "name": "Windmills",
    "muscles": "Adductors",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/501/Male/m/501_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/501/Female/m/501_2.jpg",
    "name": "Ankle Circles",
    "muscles": "Calves",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/623/Male/m/623_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/623/Female/m/623_1.jpg",
    "name": "Anterior Tibialis-SMR",
    "muscles": "Calves",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/263/Male/m/263_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/263/Female/m/263_1.jpg",
    "name": "Balance Board",
    "muscles": "Calves",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/176/Male/m/176_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/176/Female/m/176_1.jpg",
    "name": "Barbell Seated Calf Raise",
    "muscles": "Calves",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/862/Male/m/862_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/862/Female/m/862_1.jpg",
    "name": "Calf Press",
    "muscles": "Calves",
    "equipment": "Machine"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/215/Male/m/215_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/215/Female/m/215_1.jpg",
    "name": "Calf Press On The Leg Press Machine",
    "muscles": "Calves",
    "equipment": "Machine"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/242/Male/m/242_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/242/Female/m/242_1.jpg",
    "name": "Calf Raise On A Dumbbell",
    "muscles": "Calves",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/256/Male/m/256_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/256/Female/m/256_1.jpg",
    "name": "Calf Raises - With Bands",
    "muscles": "Calves",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/479/Male/m/479_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/479/Female/m/479_1.jpg",
    "name": "Calf Stretch Elbows Against Wall",
    "muscles": "Calves",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/480/Male/m/480_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/480/Female/m/480_1.jpg",
    "name": "Calf Stretch Hands Against Wall",
    "muscles": "Calves",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/625/Male/m/625_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/625/Female/m/625_1.jpg",
    "name": "Calves-SMR",
    "muscles": "Calves",
    "equipment": "Foam Roll"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/296/Male/m/296_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/296/Female/m/296_1.jpg",
    "name": "Donkey Calf Raises",
    "muscles": "Calves",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/175/Male/m/175_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/175/Female/m/175_1.jpg",
    "name": "Dumbbell Seated One-Leg Calf Raise",
    "muscles": "Calves",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/626/Male/m/626_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/626/Female/m/626_1.jpg",
    "name": "Foot-SMR",
    "muscles": "Calves",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/264/Male/m/264_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/264/Female/m/264_1.jpg",
    "name": "Knee Circles",
    "muscles": "Calves",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/507/Male/m/507_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/507/Female/m/507_1.jpg",
    "name": "Bottoms-Up Clean From The Hang Position",
    "muscles": "Forearms",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/317/Male/m/317_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/317/Female/m/317_1.jpg",
    "name": "Cable Wrist Curl",
    "muscles": "Forearms",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/321/Male/m/321_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/321/Male/m/321_1.jpg",
    "name": "Dumbbell Lying Pronation",
    "muscles": "Forearms",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/323/Male/m/323_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/323/Male/m/323_1.jpg",
    "name": "Dumbbell Lying Supination",
    "muscles": "Forearms",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/682/Male/m/682_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/682/Female/m/682_1.jpg",
    "name": "Farmer's Walk",
    "muscles": "Forearms",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1681/Male/m/1681_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1681/Male/m/1681_1.jpg",
    "name": "Finger Curls",
    "muscles": "Forearms",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/468/Male/m/468_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/468/Female/m/468_1.jpg",
    "name": "Kneeling Forearm Stretch",
    "muscles": "Forearms",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4/Male/m/4_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4/Female/m/4_1.jpg",
    "name": "Palms-Down Dumbbell Wrist Curl Over A Bench",
    "muscles": "Forearms",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2/Male/m/2_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2/Female/m/2_1.jpg",
    "name": "Palms-Down Wrist Curl Over A Bench",
    "muscles": "Forearms",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/390/Male/m/390_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/390/Female/m/390_1.jpg",
    "name": "Palms-Up Barbell Wrist Curl Over A Bench",
    "muscles": "Forearms",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3/Male/m/3_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3/Female/m/3_1.jpg",
    "name": "Palms-Up Dumbbell Wrist Curl Over A Bench",
    "muscles": "Forearms",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3671/Male/m/3671_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3671/Male/m/3671_1.jpg",
    "name": "Partner Farmer's Walk Competition",
    "muscles": "Forearms",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3681/Male/m/3681_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3681/Male/m/3681_1.jpg",
    "name": "Partner Suitcase Carry Competition",
    "muscles": "Forearms",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/237/Male/m/237_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/237/Female/m/237_1.jpg",
    "name": "Plate Pinch",
    "muscles": "Forearms",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/742/Male/m/742_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/742/Female/m/742_1.jpg",
    "name": "Rickshaw Carry",
    "muscles": "Forearms",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4381/Male/m/4381_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4381/Female/m/4381_1.jpg",
    "name": "Assisted Chin-Up",
    "muscles": "Lats",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/849/Male/m/849_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/849/Male/m/849_1.jpg",
    "name": "Band Assisted Pull-Up",
    "muscles": "Lats",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/49/Male/m/49_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/49/Female/m/49_1.jpg",
    "name": "Bent-Arm Barbell Pullover",
    "muscles": "Lats",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4161/Male/m/4161_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4161/Female/m/4161_1.jpg",
    "name": "Burpee Pull-Up",
    "muscles": "Lats",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/313/Male/m/313_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/313/Female/m/313_1.jpg",
    "name": "Cable Incline Pushdown",
    "muscles": "Lats",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/768/Male/m/768_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/768/Female/m/768_1.jpg",
    "name": "Catch and Overhead Throw",
    "muscles": "Lats",
    "equipment": "Medicine Ball"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/487/Male/m/487_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/487/Female/m/487_1.jpg",
    "name": "Chair Lower Back Stretch",
    "muscles": "Lats",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/129/Male/m/129_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/129/Female/m/129_1.jpg",
    "name": "Chin-Up",
    "muscles": "Lats",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/14/Male/m/14_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/14/Female/m/14_1.jpg",
    "name": "Close-Grip Front Lat Pulldown",
    "muscles": "Lats",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/586/Male/m/586_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/586/Female/m/586_1.jpg",
    "name": "Dynamic Back Stretch",
    "muscles": "Lats",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/293/Male/m/293_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/293/Female/m/293_1.jpg",
    "name": "Elevated Cable Rows",
    "muscles": "Lats",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/182/Male/m/182_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/182/Female/m/182_1.jpg",
    "name": "Full Range-Of-Motion Lat Pulldown",
    "muscles": "Lats",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/292/Male/m/292_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/292/Female/m/292_1.jpg",
    "name": "Gironda Sternum Chins",
    "muscles": "Lats",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1471/Male/m/1471_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1471/Female/m/1471_1.jpg",
    "name": "Kipping Muscle Up",
    "muscles": "Lats",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1921/Male/m/1921_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1921/Male/m/1921_1.jpg",
    "name": "Kneeling High Pulley Row",
    "muscles": "Lats",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/578/Male/m/578_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/578/Female/m/578_1.jpg",
    "name": "90/90 Hamstring",
    "muscles": "Hamstrings",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/544/Male/m/544_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/544/Female/m/544_1.jpg",
    "name": "Alternating Hang Clean",
    "muscles": "Hamstrings",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3691/Male/m/3691_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3691/Male/m/3691_1.jpg",
    "name": "Alternating Leg Swing",
    "muscles": "Hamstrings",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/861/Male/m/861_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/861/Female/m/861_1.jpg",
    "name": "Ball Leg Curl",
    "muscles": "Hamstrings",
    "equipment": "Exercise Ball"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/729/Male/m/729_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/729/Female/m/729_1.jpg",
    "name": "Band Good Morning",
    "muscles": "Hamstrings",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/740/Male/m/740_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/740/Female/m/740_1.jpg",
    "name": "Band Good Morning (Pull Through)",
    "muscles": "Hamstrings",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3831/Male/m/3831_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3831/Female/m/3831_1.jpg",
    "name": "Barbell Deadlift",
    "muscles": "Hamstrings",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/766/Male/m/766_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/766/Female/m/766_1.jpg",
    "name": "Box Jump (Multiple Response)",
    "muscles": "Hamstrings",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/767/Male/m/767_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/767/Female/m/767_1.jpg",
    "name": "Box Skip",
    "muscles": "Hamstrings",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/486/Male/m/486_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/486/Female/m/486_1.jpg",
    "name": "Chair Leg Extended Stretch",
    "muscles": "Hamstrings",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/669/Male/m/669_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/669/Female/m/669_1.jpg",
    "name": "Clean",
    "muscles": "Hamstrings",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/671/Male/m/671_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/671/Female/m/671_1.jpg",
    "name": "Clean Deadlift",
    "muscles": "Hamstrings",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/553/Male/m/553_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/553/Female/m/553_1.jpg",
    "name": "Double Kettlebell Alternating Hang Clean",
    "muscles": "Hamstrings",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2271/Male/m/2271_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2271/Male/m/2271_1.jpg",
    "name": "Dumbbell Clean",
    "muscles": "Hamstrings",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1121/Male/m/1121_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1121/Male/m/1121_1.jpg",
    "name": "Floor Glute-Ham Raise",
    "muscles": "Hamstrings",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/158/Male/m/158_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/158/Female/m/158_1.jpg",
    "name": "Alternate Hammer Curl",
    "muscles": "Biceps",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/125/Male/m/125_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/125/Female/m/125_1.jpg",
    "name": "Alternate Incline Dumbbell Curl",
    "muscles": "Biceps",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/169/Male/m/169_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/169/Female/m/169_1.jpg",
    "name": "Barbell Curl",
    "muscles": "Biceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/300/Male/m/300_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/300/Female/m/300_1.jpg",
    "name": "Barbell Curls Lying Against An Incline",
    "muscles": "Biceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4101/Male/m/4101_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4101/Female/m/4101_1.jpg",
    "name": "Biceps Curl To Shoulder Press",
    "muscles": "Biceps",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/624/Male/m/624_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/624/Female/m/624_1.jpg",
    "name": "Brachialis-SMR",
    "muscles": "Biceps",
    "equipment": "Foam Roll"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/189/Male/m/189_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/189/Female/m/189_1.jpg",
    "name": "Cable Hammer Curls - Rope Attachment",
    "muscles": "Biceps",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/221/Male/m/221_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/221/Female/m/221_1.jpg",
    "name": "Cable Preacher Curl",
    "muscles": "Biceps",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/238/Male/m/238_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/238/Female/m/238_1.jpg",
    "name": "Close-Grip EZ Bar Curl",
    "muscles": "Biceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1631/Male/m/1631_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1631/Male/m/1631_1.jpg",
    "name": "Close-Grip EZ-Bar Curl with Band",
    "muscles": "Biceps",
    "equipment": "E-Z Curl Bar"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/276/Male/m/276_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/276/Female/m/276_1.jpg",
    "name": "Close-Grip Standing Barbell Curl",
    "muscles": "Biceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/m/136_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Female/m/136_1.jpg",
    "name": "Concentration Curls",
    "muscles": "Biceps",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/236/Male/m/236_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/236/Female/m/236_1.jpg",
    "name": "Cross Body Hammer Curl",
    "muscles": "Biceps",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/174/Male/m/174_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/174/Female/m/174_1.jpg",
    "name": "Drag Curl",
    "muscles": "Biceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/234/Male/m/234_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/234/Female/m/234_1.jpg",
    "name": "Dumbbell Alternate Bicep Curl",
    "muscles": "Biceps",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/534/Male/m/534_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/534/Female/m/534_1.jpg",
    "name": "Alternating Floor Press",
    "muscles": "Pectorals",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/277/Male/m/277_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/277/Female/m/277_1.jpg",
    "name": "Around The Worlds",
    "muscles": "Pectorals",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Male/m/360_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Female/m/360_1.jpg",
    "name": "Barbell Bench Press - Medium Grip",
    "muscles": "Pectorals",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3301/Male/m/3301_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3301/Female/m/3301_1.jpg",
    "name": "Barbell Bench Press-Wide Grip",
    "muscles": "Pectorals",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/305/Male/m/305_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/305/Female/m/305_1.jpg",
    "name": "Barbell Guillotine Bench Press",
    "muscles": "Pectorals",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3311/Male/m/3311_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3311/Male/m/3311_1.jpg",
    "name": "Barbell Incline Bench Press Medium-Grip",
    "muscles": "Pectorals",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/582/Male/m/582_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/582/Female/m/582_1.jpg",
    "name": "Behind Head Pectorals Stretch",
    "muscles": "Pectorals",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/254/Male/m/254_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/254/Female/m/254_2.jpg",
    "name": "Bench Press - With Bands",
    "muscles": "Pectorals",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3321/Male/m/3321_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3321/Female/m/3321_1.jpg",
    "name": "Bench Press With Short Bands",
    "muscles": "Pectorals",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/40/Male/m/40_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/40/Female/m/40_1.jpg",
    "name": "Bent-Arm Dumbbell Pullover",
    "muscles": "Pectorals",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1561/Male/m/1561_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1561/Male/m/1561_1.jpg",
    "name": "Bodyweight Flyes",
    "muscles": "Pectorals",
    "equipment": "E-Z Curl Bar"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3971/Male/m/3971_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3971/Female/m/3971_1.jpg",
    "name": "Bosu Ball Push-Up",
    "muscles": "Pectorals",
    "equipment": "Exercise Ball"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/214/Male/m/214_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/214/Female/m/214_1.jpg",
    "name": "Butterfly",
    "muscles": "Pectorals",
    "equipment": "Machine"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/870/Male/m/870_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/870/Female/m/870_1.jpg",
    "name": "Cable Pectorals Press",
    "muscles": "Pectorals",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/132/Male/m/132_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/132/Female/m/132_1.jpg",
    "name": "Cable Crossover",
    "muscles": "Pectorals",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/394/Male/m/394_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/394/Female/m/394_1.jpg",
    "name": "Ankle On The Knee",
    "muscles": "Glutes",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/662/Male/m/662_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/662/Female/m/662_1.jpg",
    "name": "Barbell Glute Bridge",
    "muscles": "Glutes",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/661/Male/m/661_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/661/Female/m/661_1.jpg",
    "name": "Barbell Hip Thrust",
    "muscles": "Glutes",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/99/Male/m/99_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/99/Female/m/99_1.jpg",
    "name": "Butt Lift (Bridge)",
    "muscles": "Glutes",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/422/Male/m/422_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/422/Female/m/422_1.jpg",
    "name": "Downward Facing Balance",
    "muscles": "Glutes",
    "equipment": "Exercise Ball"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/267/Male/m/267_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/267/Female/m/267_1.jpg",
    "name": "Flutter Kicks",
    "muscles": "Glutes",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2823/Male/m/2823_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2823/Female/m/2823_1.jpg",
    "name": "Glute Bridge Hamstring Walkout",
    "muscles": "Glutes",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/98/Male/m/98_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/98/Female/m/98_1.jpg",
    "name": "Glute Kickback",
    "muscles": "Glutes",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/877/Male/m/877_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/877/Female/m/877_1.jpg",
    "name": "Hip Extension with Bands",
    "muscles": "Glutes",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/738/Male/m/738_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/738/Female/m/738_1.jpg",
    "name": "Hip Lift with Band",
    "muscles": "Glutes",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/428/Male/m/428_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/428/Female/m/428_1.jpg",
    "name": "Knee Across The Body",
    "muscles": "Glutes",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/749/Male/m/749_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/749/Female/m/749_1.jpg",
    "name": "Kneeling Jump Squat",
    "muscles": "Glutes",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/697/Male/m/697_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/697/Female/m/697_1.jpg",
    "name": "Kneeling Squat",
    "muscles": "Glutes",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/100/Male/m/100_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/100/Female/m/100_1.jpg",
    "name": "Leg Lift",
    "muscles": "Glutes",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/605/Male/m/605_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/605/Female/m/605_1.jpg",
    "name": "Lying Glute",
    "muscles": "Glutes",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/505/Male/m/505_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/505/Female/m/505_1.jpg",
    "name": "Alternating Kettlebell Row",
    "muscles": "Trapezius",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/506/Male/m/506_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/506/Female/m/506_1.jpg",
    "name": "Alternating Renegade Row",
    "muscles": "Trapezius",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/20/Male/m/20_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/20/Female/m/20_1.jpg",
    "name": "Bent Over Barbell Row",
    "muscles": "Trapezius",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/19/Male/m/19_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/19/Female/m/19_1.jpg",
    "name": "Bent Over One-Arm Long Bar Row",
    "muscles": "Trapezius",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/18/Male/m/18_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/18/Female/m/18_1.jpg",
    "name": "Bent Over Two-Arm Long Bar Row",
    "muscles": "Trapezius",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/16/Male/m/16_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/16/Female/m/16_1.jpg",
    "name": "Bent Over Two-Dumbbell Row",
    "muscles": "Trapezius",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/17/Male/m/17_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/17/Female/m/17_1.jpg",
    "name": "Bent Over Two-Dumbbell Row With Palms In",
    "muscles": "Trapezius",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1911/Male/m/1911_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1911/Male/m/1911_1.jpg",
    "name": "Bodyweight Mid Row",
    "muscles": "Trapezius",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1311/Male/m/1311_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1311/Male/m/1311_1.jpg",
    "name": "Dumbbell Incline Row",
    "muscles": "Trapezius",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/278/Male/m/278_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/278/Female/m/278_1.jpg",
    "name": "Incline Bench Pull",
    "muscles": "Trapezius",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/879/Male/m/879_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/879/Female/m/879_1.jpg",
    "name": "Inverted Row",
    "muscles": "Trapezius",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/886/Male/m/886_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/886/Female/m/886_1.jpg",
    "name": "Inverted Row with Straps",
    "muscles": "Trapezius",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/892/Male/m/892_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/892/Female/m/892_1.jpg",
    "name": "Leverage High Row",
    "muscles": "Trapezius",
    "equipment": "Machine"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/302/Male/m/302_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/302/Female/m/302_1.jpg",
    "name": "Lying Cambered Barbell Row",
    "muscles": "Trapezius",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/137/Male/m/137_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/137/Female/m/137_1.jpg",
    "name": "Lying T-Bar Row",
    "muscles": "Trapezius",
    "equipment": "Machine"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/467/Male/m/467_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/467/Female/m/467_1.jpg",
    "name": "Chin To Pectorals Stretch",
    "muscles": "Neck",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/27/Male/m/27_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/27/Female/m/27_1.jpg",
    "name": "Isometric Neck Exercise - Front And Back",
    "muscles": "Neck",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/28/Male/m/28_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/28/Female/m/28_1.jpg",
    "name": "Isometric Neck Exercise - Sides",
    "muscles": "Neck",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/25/Male/m/25_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/25/Female/m/25_1.jpg",
    "name": "Lying Face Down Plate Neck Resistance",
    "muscles": "Neck",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/26/Male/m/26_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/26/Female/m/26_1.jpg",
    "name": "Lying Face Up Plate Neck Resistance",
    "muscles": "Neck",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3451/Male/m/3451_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3451/Male/m/3451_1.jpg",
    "name": "Neck Bridge Prone",
    "muscles": "Neck",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/628/Male/m/628_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/628/Female/m/628_1.jpg",
    "name": "Neck-SMR",
    "muscles": "Neck",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/29/Male/m/29_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/29/Male/m/29_1.jpg",
    "name": "Seated Head Harness Neck Resistance",
    "muscles": "Neck",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/447/Male/m/447_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/447/Female/m/447_1.jpg",
    "name": "Side Neck Stretch",
    "muscles": "Neck",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1781/Male/m/1781_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1781/Male/m/1781_1.jpg",
    "name": "Alternating Cable Shoulder Press",
    "muscles": "Deltoids",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/880/Male/m/880_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/880/Female/m/880_1.jpg",
    "name": "Alternating Deltoid Raise",
    "muscles": "Deltoids",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/504/Male/m/504_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/504/Female/m/504_1.jpg",
    "name": "Alternating Kettlebell Press",
    "muscles": "Deltoids",
    "equipment": "Kettlebells"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1811/Male/m/1811_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1811/Male/m/1811_1.jpg",
    "name": "Anti-Gravity Press",
    "muscles": "Deltoids",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/497/Male/m/497_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/497/Female/m/497_1.jpg",
    "name": "Arm Circles",
    "muscles": "Deltoids",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/82/Male/m/82_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/82/Female/m/82_1.jpg",
    "name": "Arnold Dumbbell Press",
    "muscles": "Deltoids",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3203/Male/m/3203_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3203/Female/m/3203_1.jpg",
    "name": "Axle Clean And Press",
    "muscles": "Deltoids",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/253/Male/m/253_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/253/Female/m/253_1.jpg",
    "name": "Back Flyes - With Bands",
    "muscles": "Deltoids",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/764/Male/m/764_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/764/Female/m/764_1.jpg",
    "name": "Backward Medicine Ball Throw",
    "muscles": "Deltoids",
    "equipment": "Medicine Ball"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1351/Male/m/1351_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1351/Female/m/1351_1.jpg",
    "name": "Band Pull Apart",
    "muscles": "Deltoids",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3741/Male/m/3741_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3741/Female/m/3741_1.jpg",
    "name": "Barbell Front Raise",
    "muscles": "Deltoids",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/306/Male/m/306_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/306/Female/m/306_1.jpg",
    "name": "Barbell Incline Shoulder Raise",
    "muscles": "Deltoids",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/307/Male/m/307_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/307/Female/m/307_1.jpg",
    "name": "Barbell Rear Delt Row",
    "muscles": "Deltoids",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/308/Male/m/308_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/308/Female/m/308_1.jpg",
    "name": "Barbell Shoulder Press",
    "muscles": "Deltoids",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1711/Male/m/1711_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1711/Male/m/1711_1.jpg",
    "name": "Battling Ropes",
    "muscles": "Deltoids",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4541/Male/m/4541_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4541/Female/m/4541_1.jpg",
    "name": "Alien Squat",
    "muscles": "Quads",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/581/Male/m/581_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/581/Female/m/581_1.jpg",
    "name": "All Fours Quad Stretch",
    "muscles": "Quads",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/760/Male/m/760_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/760/Female/m/760_1.jpg",
    "name": "Alternate Leg Diagonal Bound",
    "muscles": "Quads",
    "equipment": "None"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/728/Male/m/728_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/728/Female/m/728_1.jpg",
    "name": "Backward Drag",
    "muscles": "Quads",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/64/Male/m/64_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/64/Female/m/64_1.jpg",
    "name": "Barbell Full Squat",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/84/Male/m/84_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/84/Female/m/84_1.jpg",
    "name": "Barbell Hack Squat",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/41/Male/m/41_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/41/Female/m/41_1.jpg",
    "name": "Barbell Lunge",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4361/Male/m/4361_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4361/Female/m/4361_1.jpg",
    "name": "Barbell Reverse Lunge",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/310/Male/m/310_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/310/Female/m/310_1.jpg",
    "name": "Barbell Side Split Squat",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3861/Male/m/3861_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3861/Female/m/3861_1.jpg",
    "name": "Barbell Squat",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/58/Male/m/58_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/58/Female/m/58_1.jpg",
    "name": "Barbell Squat To A Bench",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3871/Male/m/3871_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3871/Female/m/3871_1.jpg",
    "name": "Barbell Squat To A Box",
    "muscles": "Quads",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/62/Male/m/62_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/62/Female/m/62_1.jpg",
    "name": "Barbell Step Ups",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4231/Male/m/4231_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/4231/Female/m/4231_1.jpg",
    "name": "Barbell Thruster",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2241/Male/m/2241_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2241/Female/m/2241_1.jpg",
    "name": "Barbell Walking Lunge",
    "muscles": "Quads",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1211/Male/m/1211_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1211/Male/m/1211_1.jpg",
    "name": "Band Skull Crusher",
    "muscles": "Triceps",
    "equipment": "Bands"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/344/Male/m/344_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/344/Female/m/344_1.jpg",
    "name": "Bench Dips",
    "muscles": "Triceps",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/663/Male/m/663_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/663/Female/m/663_1.jpg",
    "name": "Bench Press - Powerlifting",
    "muscles": "Triceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/732/Male/m/732_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/732/Female/m/732_1.jpg",
    "name": "Bench Press with Chains",
    "muscles": "Triceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/664/Male/m/664_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/664/Female/m/664_1.jpg",
    "name": "Board Press",
    "muscles": "Triceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1291/Male/m/1291_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1291/Male/m/1291_1.jpg",
    "name": "Body Tricep Press",
    "muscles": "Triceps",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3991/Male/m/3991_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/3991/Female/m/3991_1.jpg",
    "name": "Body-Up",
    "muscles": "Triceps",
    "equipment": "Body Only"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/314/Male/m/314_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/314/Female/m/314_1.jpg",
    "name": "Cable Incline Triceps Extension",
    "muscles": "Triceps",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/161/Male/m/161_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/161/Female/m/161_1.jpg",
    "name": "Cable Lying Triceps Extension",
    "muscles": "Triceps",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/80/Male/m/80_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/80/Female/m/80_1.jpg",
    "name": "Cable One Arm Tricep Extension",
    "muscles": "Triceps",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/220/Male/m/220_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/220/Female/m/220_1.jpg",
    "name": "Cable Rope Overhead Triceps Extension",
    "muscles": "Triceps",
    "equipment": "Cable"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/733/Male/m/733_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/733/Female/m/733_1.jpg",
    "name": "Chain Handle Extension",
    "muscles": "Triceps",
    "equipment": "Other"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/m/23_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Female/m/23_1.jpg",
    "name": "Close-Grip Barbell Bench Press",
    "muscles": "Triceps",
    "equipment": "Barbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1611/Male/m/1611_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1611/Male/m/1611_1.jpg",
    "name": "Close-Grip Dumbbell Press",
    "muscles": "Triceps",
    "equipment": "Dumbbell"
  },
  {
    "image1": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1701/Male/m/1701_1.jpg",
    "image2": "http://www.bodybuilding.com/exercises/exerciseImages/sequences/1701/Male/m/1701_1.jpg",
    "name": "Close-Grip EZ-Bar Press",
    "muscles": "Triceps",
    "equipment": "E-Z Curl Bar"
  }
]
exercises2.forEach(function(exercise){
	var newExercise = Exercise({
		name: exercise.name,
		equipment: exercise.equipment,
		muscles: exercise.muscles,
		image1: exercise.image1,
		image2: exercise.image2
	})
	newExercise.save(function(err){
		if(err){
			console.log(err)
		} else {
			console.log("saved product");
		}
	})
})
