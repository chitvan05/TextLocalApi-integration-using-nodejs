
module.exports = {

 sendsms: function(toNumber,msg){

var http = require('http');
var urlencode = require('urlencode');
var data = urlencode(msg);
var toNumber;
var msg;

var username = 'yourusername';
var hash = 'insert your value'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
var sender = 'insert your value';
var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + data;
var options = {
 host: 'api.textlocal.in', path: '/send?' + data
};
callback = function (response) {
 var str = '';//another chunk of data has been recieved, so append it to `str`
 response.on('data', function (chunk) {
   str += chunk;
 });//the whole response has been recieved, so we just print it out here
 response.on('end', function () {
   console.log(str);
 });
}//console.log('hello js'))
http.request(options, callback).end();//url encode instalation need to use $ npm install urlencode

}

};
