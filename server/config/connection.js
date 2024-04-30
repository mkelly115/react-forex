require("dotenv").config();
const mongoose = require('mongoose');

async function connect() {
  try {
    const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/react-forex'; // Default database name is 'react-forex'
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connect;