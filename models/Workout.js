var mongoose = require('mongoose');

var schema = mongoose.Schema({
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

module.exports = mongoose.model('Workout', schema);