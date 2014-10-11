/**
 * Created by efim on 10/11/14.
 */


var express = require('express');
var router = express.Router();

var log = require('../lib/logger');

var request = require('request');


router.get('/', function(req, res) {
    var url = req.baseUrl.replace('/opentsdb', '');

    log.info('Serving Opentsdb proxy to url='+ url);

    var options = {
        url : 'http://54.208.5.227:4242' + url,
        method : 'get',
        headers : req.headers
    };

    request(options, function(error, response, body) {
        log.info('GOT response from Opentsdb error='+error);
        for (var name in response.headers) {
            res.setHeader(name, response.headers[name]);
        }
        res.send(body);
    });
});


router.post('/', function(req, res) {

    var url = req.baseUrl.replace('/opentsdb', '');

    log.info('Serving Elastic proxy to url='+ url);

    var options = {
        url : 'http://54.208.5.227:4242' + url,
        method : 'post',
        headers : req.headers,
        body : req.body
    };

    request(options, function(error, response, body) {
        log.info('GOT response from ElasticSearch error='+error);
        for (var name in response.headers) {
            res.setHeader(name, response.headers[name]);
        }
        res.send(body);
    });
});

module.exports = router;