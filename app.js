//lists all functions needed from the inputFunctions library, passes it to the delivery module
var requestedFunctions = {
    readText,
    readDecimal
};

module.exports = (requestedFunctions);

//receives requested functions
var receivedFunctions = require('./functionDelivery');

//counts decimal, unsigned amount of iterations, then displays the output of the readText function
function countdown(){
    var x = receivedFunctions.readDecimal();
    var returnedValue = receivedFunctions.readText();

    while (x > 0){
        console.log('Text in', x ,'interations.');
        --x;
    };

    console.log(returnedValue);
};

countdown();