// controllers/farmerGroupController.js
const FarmerGroup = require('../models/FarmerGroup');

exports.createFarmerGroup = async (req, res) => {
  try {
    const {
      groupName,
      groupLocation,
      groupGeoLocation,
      selectedAggregator,
      selectedGroupType,
    } = req.body;

    const farmerGroup = new FarmerGroup({
      groupName,
      groupLocation,
      groupGeoLocation,
      selectedAggregator,
      selectedGroupType,
    });

    await farmerGroup.save();

    res.status(201).json({ message: 'Farmer Group created successfully', data: farmerGroup });
  } catch (error) {
    console.error('Error creating farmer group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
