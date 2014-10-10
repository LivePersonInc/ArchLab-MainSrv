/**
 * Created by efim on 10/10/14.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Architecture Labs' });
});

module.exports = router;