require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { json } = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('MongoDB Atlas connection error:', error);
  });

  // Simple Hello World Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Test Route
app.get('/test', (req, res) => {
  res.send('Test Route');
});

// Load Routes

// Mount the API Routes

module.exports = app;
