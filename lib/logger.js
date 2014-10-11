/**
 * Created by efim on 10/11/14.
 */
var winston = require('winston');
var moment = require('moment');

var logger = new(winston.Logger)({
    exitOnError: false,
    transports: [
        new(winston.transports.DailyRotateFile)({
            filename: 'archMain',
            dirname: __dirname + '/../log',
            datePattern: '.yyyy-MM-dd',
            timestamp: function () {
                var d = new Date();
                return moment().format("MMM D YYYY, HH:mm:ss");
            }
        }),
        new(winston.transports.Console)({
            colorize: true,
            timestamp: function () {
                var d = new Date();
                return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            }
        })
    ]
});


module.exports = logger;