var express = require('express');
var router = express.Router();
/* Post logout listing. */
router.post('/', function(req, res, next) {
 res.end();
});
module.exports = router;