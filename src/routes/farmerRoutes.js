const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmerController');

// POST /farmers/register
router.post('/register', farmerController.registerFarmer);

module.exports = router;
