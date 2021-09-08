function display(value1){
    document.getElementById('textValue').value += value1;
     
}

function clearValue(){
    document.getElementById('textValue').value = "";
}

function evaluateValue(){
    var textValue = document.getElementById('textValue').value;
    result = eval(textValue);
    display('=');
    display(result);
}