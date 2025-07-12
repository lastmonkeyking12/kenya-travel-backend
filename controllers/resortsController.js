const Resort = require('../models/resortModel');

const getResorts = async (req, res) => {
  const { location, services } = req.query;
  let query = {};
  if (location) query.location = location;
  if (services) query.services = { $in: services.split(',') };

  const resorts = await Resort.find(query);
  res.json(resorts);
};

const addResort = async (req, res) => {
  const resort = new Resort(req.body);
  await resort.save();
  res.status(201).json(resort);
};

const trackClick = async (req, res) => {
  const { id } = req.params;
  await Resort.findByIdAndUpdate(id, { $inc: { clickCount: 1 } });
  res.status(204).end();
};

module.exports = { getResorts, addResort, trackClick };
