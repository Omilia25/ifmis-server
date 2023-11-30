const Aggregator = require('../models/AggregatorModel');

// Controller function to handle Aggregator registration
exports.registerAggregator = async (req, res) => {
  try {
    const {
      aggregatorName,
      aggregatorGeoLocation,
      businessType,
      companyPhoneNumber,
      companyEmail,
      maleEmployees,
      femaleEmployees,
      commodities,
      equipment,
    } = req.body;

    // Validate input fields including commodities and equipment
    if (
      !aggregatorName ||
      !aggregatorGeoLocation ||
      !businessType ||
      !companyPhoneNumber ||
      !companyEmail ||
      !maleEmployees ||
      !femaleEmployees ||
      !commodities.every((item) => item.name && item.quantity > 0) ||
      !equipment.every((item) => item.type && item.quantity > 0)
    ) {
      return res.status(400).json({ error: 'Please fill in all the required fields.' });
    }

    // Create a new Aggregator instance
    const newAggregator = new Aggregator({
      aggregatorName,
      aggregatorGeoLocation,
      businessType,
      companyPhoneNumber,
      companyEmail,
      maleEmployees,
      femaleEmployees,
      commodities,
      equipment,
    });

    // Save the Aggregator data to the database
    await newAggregator.save();

    // Respond with success message
    res.status(201).json({ message: 'Aggregator registration successful.' });
  } catch (error) {
    console.error('Error registering aggregator:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Controller function to get all Aggregators
exports.getAllAggregators = async (req, res) => {
  try {
    // Fetch all Aggregators from the database
    const aggregators = await Aggregator.find();

    // Respond with the list of Aggregators
    res.status(200).json(aggregators);
  } catch (error) {
    console.error('Error getting aggregators:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
