
var mongoose = require('mongoose');

var excercise = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  equipment: {
    type: String,
    required: false
  },
  muscles: {
    type: Array,
    required: true
  },
  image1: String,
  image2: String
});

module.exports = mongoose.model('Exercise', excercise);
