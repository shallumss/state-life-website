const router = require('express').Router();
const { check } = require('express-validator');
const ctrl = require('../controllers/announcement.controller');
const { validate } = require('../middleware/validation.middleware');
const { basicAuth } = require('../middleware/auth.middleware');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', basicAuth,
  [ check('title').notEmpty(), check('content').notEmpty() ],
  validate, ctrl.create);
router.put('/:id', basicAuth,
  [ check('title').notEmpty(), check('content').notEmpty() ],
  validate, ctrl.update);
router.delete('/:id', basicAuth, ctrl.remove);

module.exports = router;