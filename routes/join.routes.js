const router = require('express').Router();
const upload = require('../middleware/upload.middleware');
const { check } = require('express-validator');
const ctrl = require('../controllers/join.controller');
const { validate } = require('../middleware/validation.middleware');

router.get('/', (req, res) => res.render('join', { title: 'Join Our Team' }));
router.post('/', upload.single('resume'),
  [ check('name').notEmpty(), check('email').isEmail() ],
  validate, ctrl.submit);

module.exports = router;