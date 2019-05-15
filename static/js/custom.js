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

var numberOfFields = 1;

var spinner = document.getElementById('spinner');
spinner.value = 1;
var lastSpinnerValue = spinner.value;

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
        var parseE = parseFloat(field.value);
        if(isNaN(parseE)) { continue; }
        else { sumOfInput += parseE; }
    }
    return sumOfInput / elementArray.length;
}

function addFieldButton() {

    numberOfFields += 1;

    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Grade #" + numberOfFields;
    newInput.classList.add("grade-input");
    document.getElementById("inputContainer").appendChild(newInput);
    lastInput = newInput;
    
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

    console.log("Field added.");

}

function removeFieldButton() {

    if(document.getElementsByClassName("grade-input").length == 1) {
        console.log("Remove field command rejected.")
        return;
    }

    numberOfFields -= 1;
    document.getElementById("inputContainer").removeChild(lastInput);
    lastInput = document.getElementsByClassName("grade-input")[numberOfFields - 1];

    spinner.value = parseInt(spinner.value) - 1;
    lastSpinnerValue = spinner.value;
    console.log("Field removed.");
}

function autoRemoveField() {

    numberOfFields -= 1;

    document.getElementById("inputContainer").removeChild(lastInput);
    lastInput = document.getElementsByClassName("grade-input")[numberOfFields - 1];

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