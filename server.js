
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');


var routes = require('./routes/main');
//var grafanaRoutes = require('./routes/grafana');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(path.join(__dirname, 'apps/grafana')));

app.use('/', routes);
//app.use('/users', grafanaRoutes);


app.set('port', 8888);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});