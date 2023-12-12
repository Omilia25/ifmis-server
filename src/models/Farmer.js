const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  farmSize: {
    type: Number,
    required: true,
  },
  crops: {
    type: [String],
    required: true,
  },
  livestock: {
    type: [String],
    required: true,
  },
  farmGeoLocation: {
    type: {
      latitude: Number,
      longitude: Number,
    },
    required: true,
  },
  searchAggregator: {
    type: String,
    required: true,
  },
  searchGroup: {
    type: String,
    required: true,
  },
});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
