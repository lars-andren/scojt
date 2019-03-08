/**
 * Created by andrenlars on 07/03/19.
 */

var http = require('http');
const express = require('express');
const path = require('path');

var username = '';
var password = '';

var fs = require('fs');
fs.readFile('resources/credentials', 'utf8', function (err,data) {

  var arr = data.split(";").map(val => Number(val) + 1)
  username = arr[0];
  password = arr[1];
  if (err) { return console.log(err); }
});

var EasySoap = require('easysoap');

var params = {
  host: 'api2.mypasscode.com',
  path: '/api/CustomerApi30/',
  wsdl: '/api/CustomerApi30?wsdl',

  // set soap headers (optional)
  headers: [{
    'username' : username,
    'password' : password
  }]
};

console.log(params);

var soapClient = EasySoap(params);
//soapClient.getAllFunctions().then((functionArray) => { console.log(functionArray); })
//.catch((err) => { throw new Error(err); });

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');



server.get('/', function(req, res){
  res.render('index');
});

server.listen(8080);