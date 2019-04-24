console.log("Hello World!");

var services = document.getElementById("services");

var warningLabel = document.createElement("p");
warningLabel.appendChild(document.createTextNode("Please fill out all fields with positive numbers less than 100."));
warningLabel.classList.add("centered-text");
warningLabel.classList.add("bold-text");

var answerLabel = document.createElement("h1");
var answerLabelTextNode = document.createTextNode("answerLabelTextNode");
answerLabel.appendChild(answerLabelTextNode);
answerLabel.classList.add("centered-text");

function submitButtonClicked() {

    try {
        services.removeChild(warningLabel);
    } catch(DOMException) {}

    try {
        services.removeChild(answerLabel);
    } catch(DOMException) {}

    try {
        answerLabel.removeChild(answerLabelTextNode);
    } catch(DOMException) {}

    var inputArray = document.getElementsByClassName("grade-input");

    if(validate(inputArray)) {
        console.log("Average: " + average(inputArray));
        answerLabelTextNode = document.createTextNode(average(inputArray).toFixed(2) + "%");
        answerLabel.appendChild(answerLabelTextNode);
        services.appendChild(answerLabel);
    } else {
        services.appendChild(warningLabel);
    }

}

function validate(fieldArray) {
    var isValid = true;
    for(var i = 0; i < fieldArray.length; i++) {
        fieldArray[i].classList.remove("highlight-invalid");
        var val = fieldArray[i].value;
        if(val == "") {
            fieldArray[i].value = 0;
            continue;
        }
        var parsed = parseFloat(fieldArray[i].value);
        if(isNaN(parsed) || parsed > 100) {
            fieldArray[i].classList.add("highlight-invalid");
            isValid = false;
        }
    }
    return isValid;
}

function average(elementArray) {
    var sumOfInput = 0;
    for(var i = 0; i < elementArray.length; i++) {
        var field = elementArray[i];
        var parseE = parseFloat(field.value);
        if(isNaN(parseE)) { continue; }
        else { sumOfInput += parseE; }
    }
    return sumOfInput / elementArray.length;
}

function addField() {
    var numOfInputs = document.getElementsByClassName("grade-input").length + 1;
    console.log("Field added, number of Fields: " + numOfInputs);
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Grade #" + numOfInputs;
    newInput.classList.add("grade-input");
    document.getElementById("inputContainer").appendChild(newInput);
}

// TODO: GPA and input validation