var mongoose = require('mongoose');

var exercise = mongoose.Schema({
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
  }
});

module.exports = mongoose.model('Exercise', schema);
