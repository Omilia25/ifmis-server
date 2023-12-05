// routes/trainingSession.js

const express = require('express');
const router = express.Router();
const trainingSessionController = require('../controllers/trainingSessionController');

// Define routes
router.post('/create', trainingSessionController.createTrainingSession);

module.exports = router;
