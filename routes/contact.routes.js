const router = require('express').Router();
const { check } = require('express-validator');
const ctrl = require('../controllers/contact.controller');
const { validate } = require('../middleware/validation.middleware');

router.get('/', (req, res) => res.render('contact', { title: 'Contact' }));
router.post('/',
  [ check('name').notEmpty(), check('email').isEmail(), check('message').notEmpty() ],
  validate, ctrl.submit);

module.exports = router;