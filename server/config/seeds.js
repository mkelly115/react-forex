const mongoose = require('mongoose');
const User = require('../models/User');

const usersData = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123',
    balance: { value: '100', currency: 'USD', change: '0' },
    currentCurrency: { value: '100', currency: 'USD', change: '0' }
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    password: 'password456',
    balance: { value: '200', currency: 'EUR', change: '0' },
    currentCurrency: { value: '200', currency: 'EUR', change: '0' }
  },
];

async function seedUsers() {
  try {
    await mongoose.connection.dropDatabase(); // Drop existing database
    await User.insertMany(usersData); // Insert seed data
    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    mongoose.connection.close(); // Close MongoDB connection
  }
}

seedUsers();