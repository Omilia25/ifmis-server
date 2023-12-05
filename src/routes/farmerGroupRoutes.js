// routes/farmerGroupRoutes.js
const express = require('express');
const router = express.Router();
const farmerGroupController = require('../controllers/farmerGroupController');

// POST: Create a new Farmer Group
router.post('/create', farmerGroupController.createFarmerGroup);

module.exports = router;
