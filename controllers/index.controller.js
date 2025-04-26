const Announcement = require('../models/Announcement');

exports.home = async (req, res, next) => {
  try {
    const announcements = await Announcement.find().sort('-publishedAt');
    res.render('home', { title: 'Home', announcements });
  } catch (err) {
    next(err);
  }
};

exports.about = (req, res) => res.render('about', { title: 'About' });
exports.services = (req, res) => res.render('services', { title: 'Services' });