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
  equipment: Array
});

module.exports = mongoose.model('Workout', workout);