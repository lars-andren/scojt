/**
 * Created by andrenlars on 07/03/19.
 */

var http = require('http');
const express = require('express');
const path = require('path');

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.get('/', function(req, res){
  res.render('index');
});

server.listen(8080);