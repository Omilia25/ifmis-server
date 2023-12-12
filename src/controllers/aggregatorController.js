const AggregatorModel = require('../models/AggregatorModel');

const aggregatorController = {
  // Validation middleware
  validateAggregator: (req, res, next) => {
    const {
      aggregatorGeoLocation,
      aggregatorName,
      formal,
      businessType,
      companyPhoneNumber,
      companyEmail,
      ownership,
      management,
      staff,
      product,
      infrastructure,
      equipment,
    } = req.body;

    // Implement your validation logic here
    if (!aggregatorGeoLocation || !aggregatorName || !formal || !businessType || !companyPhoneNumber || !companyEmail) {
      return res.status(400).json({ error: 'Please fill in all the required fields.' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(companyEmail)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    // You can add more specific validation logic based on your requirements

    next();
  },

  // Create a new aggregator
  createAggregator: async (req, res) => {
    try {
      const newAggregator = new AggregatorModel(req.body);
      const savedAggregator = await newAggregator.save();
      res.status(201).json(savedAggregator);
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map((e) => e.message);
        return res.status(400).json({ error: 'Validation failed', details: validationErrors });
      }

      res.status(500).json({ error: 'Internal server error.' });
    }
  },

  // Get a list of aggregators with pagination
  getAggregators: async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: { createdAt: -1 },
      };
      const aggregators = await AggregatorModel.paginate({}, options);
      res.json(aggregators);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get an aggregator by ID
  getAggregatorById: async (req, res) => {
    try {
      const aggregator = await AggregatorModel.findById(req.params.id);
      if (!aggregator) {
        return res.status(404).json({ error: 'Aggregator not found' });
      }
      res.json(aggregator);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update an aggregator by ID
  updateAggregator: async (req, res) => {
    try {
      const existingAggregator = await AggregatorModel.findById(req.params.id);

      if (!existingAggregator) {
        return res.status(404).json({ error: 'Aggregator not found' });
      }

      // Update fields based on the request body
      existingAggregator.set(req.body);
      const updatedAggregator = await existingAggregator.save();

      res.json(updatedAggregator);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete an aggregator by ID
  deleteAggregator: async (req, res) => {
    try {
      const deletedAggregator = await AggregatorModel.findByIdAndDelete(req.params.id);
      if (!deletedAggregator) {
        return res.status(404).json({ error: 'Aggregator not found' });
      }
      res.json({ message: 'Aggregator deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = aggregatorController;









// const Aggregator = require('../models/AggregatorModel');

// // Controller function to handle Aggregator registration
// exports.registerAggregator = async (req, res) => {
//   try {
//     const {
//       aggregatorName,
//       aggregatorGeoLocation,
//       businessType,
//       companyPhoneNumber,
//       companyEmail,
//       maleEmployees,
//       femaleEmployees,
//       commodities,
//       equipment,
//     } = req.body;

//     // Validate input fields including commodities and equipment
//     if (
//       !aggregatorName ||
//       !aggregatorGeoLocation ||
//       !businessType ||
//       !companyPhoneNumber ||
//       !companyEmail ||
//       !maleEmployees ||
//       !femaleEmployees ||
//       !commodities.every((item) => item.name && item.quantity > 0) ||
//       !equipment.every((item) => item.type && item.quantity > 0)
//     ) {
//       return res.status(400).json({ error: 'Please fill in all the required fields.....' });
//     }

//     // Create a new Aggregator instance
//     const newAggregator = new Aggregator({
//       aggregatorName,
//       aggregatorGeoLocation,
//       businessType,
//       companyPhoneNumber,
//       companyEmail,
//       maleEmployees,
//       femaleEmployees,
//       commodities,
//       equipment,
//     });

//     // Save the Aggregator data to the database
//     await newAggregator.save();

//     // Respond with success message
//     res.status(201).json({ message: 'Aggregator registration successful.' });
//   } catch (error) {
//     console.error('Error registering aggregator:', error);
//     res.status(500).json({ error: 'Internal server error.' });
//   }
// };

// // Controller function to get all Aggregators
// exports.getAllAggregators = async (req, res) => {
//   try {
//     // Fetch all Aggregators from the database
//     const aggregators = await Aggregator.find();

//     // Respond with the list of Aggregators
//     res.status(200).json(aggregators);
//   } catch (error) {
//     console.error('Error getting aggregators:', error);
//     res.status(500).json({ error: 'Internal server error.' });
//   }
// };
