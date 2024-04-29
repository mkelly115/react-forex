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
  team: { type: Schema.Types.ObjectId, ref: "Team" },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

const User = model('User', userSchema);

module.exports = User;
