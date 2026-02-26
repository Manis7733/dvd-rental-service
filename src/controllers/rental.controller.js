const rentalService = require("../services/rental.service");

const getRentals = async (req, res) => {
  try {
    const { page, size, status } = req.query;
    const rentals = await rentalService.fetchRentals(page, size, status);
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getRentalsCount = async (req, res) => {
  try {
    const result = await rentalService.fetchRentalsCount();
    res.json({ count: result.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getRentals, getRentalsCount };