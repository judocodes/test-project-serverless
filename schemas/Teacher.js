var mongoose = require('mongoose');
var validator = require('validator');

const teacherSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not valid.');
      }
    },
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  cognitoId: {
    type: String,
    required: true,
    trim: true,
  },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
