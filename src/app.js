require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { json } = require('body-parser');

const app = express();

//Load the routes
const aggregatorRoutes = require('./routes/aggregatorRoutes');
const farmerGroupRoutes = require('./routes/farmerGroupRoutes');
const farmerRoutes = require('./routes/farmerRoutes');
const trainingRoutes = require('./routes/trainingSession');

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

// Mount the API Routes
app.use('/aggregator', aggregatorRoutes);
app.use('/farmer-group', farmerGroupRoutes);
app.use('/farmers', farmerRoutes);
app.use('/training-sessions', trainingRoutes);


module.exports = app;
