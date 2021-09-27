//WIP, should list the function names passed by the main script for precise export
var exportList = {
    readText,
    readDecimal
};

//academical, should hook to a working <input> device
function readText(){
    return "Hello World";
}

//academical, should hook to a working <input> device
function readDecimal(){
    return 15;
}

module.exports = (exportList);