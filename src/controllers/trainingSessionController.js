// controllers/trainingSessionController.js

const TrainingSession = require('../models/trainingSession');

exports.createTrainingSession = async (req, res) => {
  try {
    const {
      sessionGeoLocation,
      currentTime,
      selectedAggregator,
      selectedGroup,
      selectedFarmers,
      trainingDetails,
    } = req.body;

    // Create a new training session
    const newTrainingSession = new TrainingSession({
      sessionGeoLocation,
      currentTime,
      selectedAggregator,
      selectedGroup,
      selectedFarmers,
      trainingDetails,
    });

    // Save the training session to the database
    await newTrainingSession.save();

    res.status(201).json({ message: 'Training session created successfully' });
  } catch (error) {
    console.error('Error creating training session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
