var express = require('express');
var router = express.Router();

const { get_sitesettings, update_sitesettings } = require('../controllers/site');

/* GET users listing. */
// router.get('/get', function(req, res, next) {
//   res.send('Welcome to site setting route');
// });

router.get('/get', get_sitesettings);
router.post('/update', update_sitesettings);

module.exports = router;