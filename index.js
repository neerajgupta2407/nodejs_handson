// JavaScript Document

var server = require('./server');
var router = require('./router');
var requesthandler = require('./requestHandler');

var handle = {};
handle['/'] = requesthandler.start;
handle['/start'] = requesthandler.start;
handle['/upload'] = requesthandler.upload;
handle['/up'] = requesthandler.up;

server.start(router.route,handle);