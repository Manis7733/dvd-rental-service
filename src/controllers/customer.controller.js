const customerService = require("../services/customer.service");

const getCustomers = async (req, res) => {
  try {
    const { page, size, name } = req.query;
    const customers = await customerService.fetchCustomers(page, size, name);
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCustomersCount = async (req, res) => {
  try {
    const result = await customerService.fetchCustomersCount();
    res.json({ count: result.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getCustomers, getCustomersCount };