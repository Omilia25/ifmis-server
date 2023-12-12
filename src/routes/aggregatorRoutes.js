const express = require('express');
const router = express.Router();
const aggregatorController = require('../controllers/aggregatorController');

// Validation middleware
router.use(aggregatorController.validateAggregator);

// Route for Aggregator registration
router.post('/register', aggregatorController.createAggregator);

// Route to get all Aggregators with pagination
router.get('/all', aggregatorController.getAggregators);

// Route to get an Aggregator by ID
router.get('/:id', aggregatorController.getAggregatorById);

// Route to update an Aggregator by ID
router.put('/:id', aggregatorController.updateAggregator);

// Route to delete an Aggregator by ID
router.delete('/:id', aggregatorController.deleteAggregator);

module.exports = router;










// const express = require('express');
// const router = express.Router();
// const aggregatorController = require('../controllers/aggregatorController');

// // Route for Aggregator registration
// router.post('/register', aggregatorController.registerAggregator);  

// // Route to get all Aggregators
// router.get('/all', aggregatorController.getAllAggregators);

// module.exports = router;
