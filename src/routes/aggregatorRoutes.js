const express = require('express');
const router = express.Router();
const aggregatorController = require('../controllers/aggregatorController');

// Route for Aggregator registration
router.post('/register', aggregatorController.registerAggregator);

// Route to get all Aggregators
router.get('/all', aggregatorController.getAllAggregators);

module.exports = router;
