//fetches functions from inputFunctions library
var inputFunctions = require('./inputFunctions');

//counts decimal, unsigned, amount of iterations, then displays the output of the readText function
function countdown() {
    var x = inputFunctions.readDecimal();
    var returnedValue = inputFunctions.readText();

    while (x > 0) {
        console.log('Text in', x ,'interations.');
        --x;
    };

    console.log(returnedValue);
};

countdown();