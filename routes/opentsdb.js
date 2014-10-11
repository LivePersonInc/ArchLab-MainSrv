/**
 * Created by efim on 10/11/14.
 */


var express = require('express');
var router = express.Router();

var log = require('../lib/logger');

var request = require('request');


router.all('/', function(req, res) {

    var url = req.originalUrl.replace('/opentsdb', '');

    log.info('Serving Opentsdb proxy to method:'+req.method + ' url='+ url);

    var options = {
        url : 'http://54.208.5.227:4242' + url,
        method : req.method,
        headers : req.headers
    };
    if (req.method=='POST' || req.method=='PUT') {
        options.body = JSON.stringify(req.body);
    }

    request(options, function(error, response, body) {
        log.info('GOT response from Opentsdb error='+error);
        for (var name in response.headers) {
            res.setHeader(name, response.headers[name]);
        }
        res.send(body);
    });
});

module.exports = router;