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

var lastInput = document.getElementsByClassName("grade-input")[0];
var lastWeightInput = document.getElementsByClassName("weight-input")[0];

var numberOfFields = 1;

var spinner = document.getElementById('spinner');
spinner.value = 1;
var lastSpinnerValue = spinner.value;

var checkbox = document.getElementById("averageCheckbox");

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
    var weightArray = document.getElementsByClassName("weight-input");

    if(validate(inputArray) && validate(weightArray)) {
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
            fieldArray[i].value = 100;
            continue;
        }
        var parsed = parseFloat(fieldArray[i].value);
        if(isNaN(parsed) || parsed > 100 || parsed < 0) {
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
        var weightField = document.getElementsByClassName("weight-input")[i];
        if(checkbox.checked) var parseE = parseFloat(field.value) * (parseFloat(weightField.value) / 100);
        else var parseE = parseFloat(field.value);
        if(isNaN(parseE)) { continue; }
        else { sumOfInput += parseE; }
    }
    if(checkbox.checked) return sumOfInput;
    else return sumOfInput / elementArray.length;
}

function addFieldButton() {

    numberOfFields += 1;

    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Grade #" + numberOfFields;
    newInput.classList.add("grade-input");
    document.getElementById("inputContainer").appendChild(newInput);
    lastInput = newInput;

    var newWeightInput = document.createElement("input");
    newWeightInput.type = "text";
    newWeightInput.placeholder = "Weight (%)";
    newWeightInput.classList.add("weight-input");
    document.getElementById("inputContainer").appendChild(newWeightInput);
    lastWeightInput = newWeightInput;
    
    spinner.value = parseInt(spinner.value) + 1;
    lastSpinnerValue = spinner.value;
    console.log("Field added.");
}

function autoAddField() {

    numberOfFields += 1;

    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Grade #" + numberOfFields;
    newInput.classList.add("grade-input");
    document.getElementById("inputContainer").appendChild(newInput);
    lastInput = newInput;

    var newWeightInput = document.createElement("input");
    newWeightInput.type = "text";
    newWeightInput.placeholder = "Weight (%)";
    newWeightInput.classList.add("weight-input");
    document.getElementById("inputContainer").appendChild(newWeightInput);
    lastWeightInput = newWeightInput;

    console.log("Field added.");

}

function removeFieldButton() {

    if(document.getElementsByClassName("grade-input").length == 1) {
        console.log("Remove field command rejected.")
        return;
    }

    numberOfFields -= 1;
    document.getElementById("inputContainer").removeChild(lastInput);
    document.getElementById("inputContainer").removeChild(lastWeightInput);
    lastInput = document.getElementsByClassName("grade-input")[numberOfFields - 1];
    lastWeightInput = document.getElementsByClassName("weight-input")[numberOfFields - 1];

    spinner.value = parseInt(spinner.value) - 1;
    lastSpinnerValue = spinner.value;
    console.log("Field removed.");
}

function autoRemoveField() {

    numberOfFields -= 1;

    document.getElementById("inputContainer").removeChild(lastInput);
    document.getElementById("inputContainer").removeChild(lastWeightInput);
    lastInput = document.getElementsByClassName("grade-input")[numberOfFields - 1];
    lastWeightInput = document.getElementsByClassName("weight-input")[numberOfFields - 1];

    console.log("Field removed.");
}

function addField(amount) {

    if(amount > 1000) {
        console.log("Add " + amount + " fields was rejected.");
        return;
    }

    for(var i = 0; i < amount; i++) {
        autoAddField();
    }

}

function removeField(amount) {

    if(numberOfFields - amount < 0) {
        console.log("Remove " + amount + " fields was rejected.");
        return;
    }

    for(var i = 0; i < amount; i++) {
        autoRemoveField();
    }

}

function spinnerChanged() {
    if(spinner.value <= 0) {
        console.log("Rejected input.");
        return;
    }
    var spinnerDifference = spinner.value - lastSpinnerValue;
    if(spinnerDifference < 0) {
        removeField(Math.abs(spinnerDifference));
        lastSpinnerValue = spinner.value;
        return;
    }
    if(spinnerDifference > 0) {
        addField(Math.abs(spinnerDifference));
        lastSpinnerValue = spinner.value;
        return;
    } else {
        console.log("Unexpected error.");
    }
}

// TODO: GPA and input validation