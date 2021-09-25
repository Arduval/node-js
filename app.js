//academical, should hook to a working <input> device
function insertText(){
    return "Hello World";
}

//academical, should hook to a working <input> device
function insertDelay(){
    return 15;
}

//counts decimal, unsigned (delay) iterations, then displays the output of the feeded function
function countdown(delay, text){
    var x = delay();
    var returnedValue = text();

    while (x > 0)
    {
        console.log('Text in', x ,'interations.');
        --x;
    };

    console.log(returnedValue);
};

countdown(insertDelay, insertText);