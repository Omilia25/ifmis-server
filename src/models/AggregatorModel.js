const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

const equipmentSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
});

const aggregatorSchema = new mongoose.Schema({
  aggregatorName: String,
  aggregatorGeoLocation: {
    latitude: Number,
    longitude: Number,
  },
  businessType: String,
  companyPhoneNumber: String,
  companyEmail: String,
  maleEmployees: String,
  femaleEmployees: String,
  commodities: [commoditySchema],
  equipment: [equipmentSchema],
});

const AggregatorModel = mongoose.model('Aggregator', aggregatorSchema);

module.exports = AggregatorModel;
