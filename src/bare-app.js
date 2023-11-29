// Bare bones app.js connecting to mongo DB
require('dotenv').config();
import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { json } from 'body-parser';

const app = express();

// Middleware
app.use(cors());
app.use(json());

// MongoDB connection
connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

export default app;
