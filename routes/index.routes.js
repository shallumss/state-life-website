const router = require('express').Router();
const indexCtrl = require('../controllers/index.controller');

router.get('/', indexCtrl.home);
router.get('/about', indexCtrl.about);
router.get('/services', indexCtrl.services);

module.exports = router;