const Farmer = require('../models/Farmer');

const registerFarmer = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      farmSize,
      crops,
      livestock,
      farmGeoLocation,
      searchAggregator,
      searchGroup,
    } = req.body;

    const newFarmer = new Farmer({
      name,
      age,
      gender,
      farmSize,
      crops,
      livestock,
      farmGeoLocation,
      searchAggregator,
      searchGroup,
    });

    await newFarmer.save();

    res.status(201).json({ message: 'Farmer registration successful', data: newFarmer });
  } catch (error) {
    console.error('Error registering farmer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { registerFarmer };
