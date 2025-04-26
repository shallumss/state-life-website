const Announcement = require('../models/Announcement');

exports.getAll = async (req, res, next) => {
  try {
    const list = await Announcement.find().sort('-publishedAt');
    res.json(list);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const ann = await Announcement.findById(req.params.id);
    res.json(ann);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const ann = await Announcement.create(req.body);
    res.status(201).json(ann);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const ann = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ann);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) { next(err); }
};