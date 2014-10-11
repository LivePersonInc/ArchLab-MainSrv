
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var log = require('./lib/logger');

var mainRoutes = require('./routes/main');
var elasticRoutes = require('./routes/elastic');
var opentsdbRoutes = require('./routes/opentsdb');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/apps/grafana', express.static(path.join(__dirname, 'apps/grafana')));

app.use('/', mainRoutes);
app.use('/elastic/*', elasticRoutes);
app.use('/opentsdb/*', opentsdbRoutes);

app.set('port', 8888);

var server = app.listen(app.get('port'), function() {
    log.info('Express server listening on port ' + server.address().port);
});