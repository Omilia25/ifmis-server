// models/FarmerGroup.js
const mongoose = require('mongoose');

const farmerGroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
  },
  groupLocation: {
    type: String,
    required: true,
  },
  groupGeoLocation: {
    type: {
      latitude: Number,
      longitude: Number,
    },
    required: true,
  },
  selectedAggregator: {
    type: String,
    required: true,
  },
  selectedGroupType: {
    type: String,
    required: true,
  },
});

const FarmerGroup = mongoose.model('FarmerGroup', farmerGroupSchema);

module.exports = FarmerGroup;
