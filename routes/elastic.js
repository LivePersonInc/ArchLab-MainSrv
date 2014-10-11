/**
 * Created by efim on 10/11/14.
 */

var express = require('express');
var router = express.Router();

var httpProxy = require('http-proxy');

var log = require('../lib/logger');

var proxy = httpProxy.createProxyServer({});

proxy.on('error', function (err, req, res) {
    log.error('Elastic proxy error:' + err);
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });

    res.end('Something went wrong. And we are reporting a custom error message.');
});

router.all('/', function(req, res) {
    log.info('Serving Elastic proxy');
    proxy.web(req, res, { target: 'http://54.164.252.162:9200' });
});

module.exports = router;