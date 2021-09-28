function compareCutStrings(stringArray, comparedStringArray) {

var count = stringArray;
for (const singled of comparedStringArray) {
    const temp = new Intl.Collator().compare(singled, requestedFunctions);
    switch (temp) {
        case '0':
            receivedFunctions.splice
        break;
    };
});

//lists all functions needed
var requestedFunctions = {
    readText,
    readDecimal
};

//receives functions from the lib and removes unneeded ones
var receivedFunctions = require('./inputFunctions');

receivedFunctions.forEach(element => (compareCutStrings(requestedFunctions));

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