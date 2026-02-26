const customerRepo = require("../repositories/customer.repository");

const fetchCustomers = async (page = 1, size = 10, name = "") => {
  const limit  = parseInt(size);
  const offset = (parseInt(page) - 1) * limit;
  return await customerRepo.getCustomers(limit, offset, name);
};

const fetchCustomersCount = async () => {
  return await customerRepo.getCustomersCount();
};

module.exports = { fetchCustomers, fetchCustomersCount };