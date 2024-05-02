const mongoose = require('mongoose');
const User = require('../models/User');

const usersData = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123',
    balance: { value: 100, currency: 'USD', change: 0 },
    currentCurrency: { value: 100, currency: 'USD', change: 0 }
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    password: 'password456',
    balance: { value: 200, currency: 'EUR', change: 0 },
    currentCurrency: { value: 200, currency: 'EUR', change: 0 }
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice@example.com',
    password: 'password789',
    balance: { value: 150, currency: 'GBP', change: 0 },
    currentCurrency: { value: 150, currency: 'GBP', change: 0 }
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob@example.com',
    password: 'passwordABC',
    balance: { value: 300, currency: 'USD', change: 0 },
    currentCurrency: { value: 300, currency: 'USD', change: 0 }
  }
];


mongoose.connect('mongodb://localhost:27017/react-forex', { useNewUrlParser: true, useUnifiedTopology: true });


async function seedUsers() {
  try {
    await User.deleteMany();

    await User.insertMany(usersData);

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {

    mongoose.disconnect();
  }
}

seedUsers();