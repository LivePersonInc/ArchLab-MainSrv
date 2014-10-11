/**
 * Created by efim on 10/10/14.
 */

var express = require('express');
var router = express.Router();

var log = require('../lib/logger');

/* GET home page. */
router.get('/', function(req, res) {
    log.info('Got request for the homepage');
    res.render('index', { title: 'Architecture Labs' });
});

module.exports = router;