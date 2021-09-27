//fetches inputFunctions library
var uncutList = require('./inputFunctions');
var requestedFunctions = require('./app');

//does some magic to cut unneeded functions. WIP
var cutList = uncutList;

//exports requested functions
module.exports = cutList;

//TODO. This is dumb. Scrapped.