const rentalRepo = require("../repositories/rental.repository");

const fetchRentals = async (page = 1, size = 10, status = "") => {
  const limit  = parseInt(size);
  const offset = (parseInt(page) - 1) * limit;
  return await rentalRepo.getRentals(limit, offset, status);
};

const fetchRentalsCount = async () => {
  return await rentalRepo.getRentalsCount();
};

module.exports = { fetchRentals, fetchRentalsCount };