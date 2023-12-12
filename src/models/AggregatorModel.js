const mongoose = require('mongoose');

// Shared schema for common ownership and management fields
const contactSchema = new mongoose.Schema({
  name: String,
  gender: String,
  youth: Boolean, // Assuming age is numeric
  phone: String
});

const productSchema = new mongoose.Schema({
  name: String,
  annualTurnover: Number,
  value: Number
});

const equipmentSchema = new mongoose.Schema({
  name: String,
});

const  infrastructureSchema = new mongoose.Schema({
  name: String,
  capacity: Number
});

const staffSchema = new mongoose.Schema({
  femalePermanent: Number,
  malePermanent: Number,
  femaleTemporary: Number,
  maleTemporary: Number,
  femaleYouth: Number,
  maleYouth: Number
});

const aggregatorSchema = new mongoose.Schema({
  aggregatorGeoLocation: {
    latitude: Number,
    longitude: Number,
  },
  aggregatorName: String,
  formal: Boolean,
  businessType: String,
  companyPhoneNumber: String,
  companyEmail: String,
  ownership: [contactSchema], // Reference shared schema
  management: [contactSchema], // Reference shared schema
  staff: staffSchema, // Maintain staff as an object
  product: [productSchema],
  infrastructure: [ infrastructureSchema],
  equipment: [equipmentSchema]
}, {
  timestamps: true, // Adding timestamps for better tracking
});

const AggregatorModel = mongoose.model('Aggregator', aggregatorSchema);

module.exports = AggregatorModel;
