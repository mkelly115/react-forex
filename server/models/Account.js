const mongoose = require('mongoose');
const User = require('./User');
const { Schema, model } = mongoose;

const accountSchema = new Schema({
        currentBalance: {
            type: Number,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    });

const Account = model('Account', accountSchema);

module.exports = Account;
