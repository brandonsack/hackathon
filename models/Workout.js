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
  	required: false
  },
  equipment: Array
});

module.exports = mongoose.model('Workout', workout);
