const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  balance: {
    value: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: 'USD'
    },
    change: {
      type: Number,
      default: 0
    }
  },
  currentCurrency: {
    value: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: 'USD'
    },
    change: {
      type: Number,
      default: 0
    }
  }
});

const User = model('User', userSchema);

module.exports = User;
