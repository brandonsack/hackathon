var mongoose = require('mongoose');

var workout = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  targetMuscles: {
  	type: Array,
  	required: true
  },
  exercises: {
  	type: Array,
  	required: true
  },
  equipment: String
});

module.exports = mongoose.model('Workout', workout);