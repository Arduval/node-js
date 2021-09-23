//academical, should hook to a working <input> device
function insertText()
{
    return "Hello World";
}

//counts 15 iterations, then displays the output of feeded function
function countdown(text)
{
    a = text();
    for (var x=15;x>0;--x)
    {
        console.log('Text in', x ,'interations.');
    }
    console.log(a);
};

countdown(insertText);