// models/trainingSession.js

const mongoose = require('mongoose');

const trainingSessionSchema = new mongoose.Schema({
  sessionGeoLocation: {
    type: {
      latitude: Number,
      longitude: Number,
    },
  },
  currentTime: String,
  selectedAggregator: String,
  selectedGroup: String,
  selectedFarmers: [String],
  trainingDetails: {
    unit: String,
    module: String,
    date: String,
    time: String,
  },
});

const TrainingSession = mongoose.model('TrainingSession', trainingSessionSchema);

module.exports = TrainingSession;
