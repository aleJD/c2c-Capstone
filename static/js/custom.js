var textFields = document.getElementsByClassName("classTextField");
var parsedValues = [textFields.length];

function submit() {
    for(int i = 0; i < textFields.length; i++) {
        var parVal = textFields[i].value;
        parVal = parseInt(parVal);
        if(parVal.isNaN) {
            return;
        } else {
            parsedValues[i] = parsedValues;
        }
    }
    var sum = 0;
    for(i = 0; i < textFields.length; i++) {
        sum += textFields[i].value;
    }
    alert("complete, sum: " + sum);
}

function invalid() {

}