console.log("Hello World!");

function submitButtonClicked() {

    var gradeInputArray = document.getElementsByClassName("grade-input");

    if(validate(gradeInputArray)) {
        document.getElementById("answer").innerHTML = average(gradeInputArray);
    } else {
        var warningLabel = document.createElement("p");
        warningLabel.appendChild(document.createTextNode("Please fill out all fields."));
        warningLabel.id = "warning-label";
        document.getElementById("services-container").appendChild(warningLabel);
    }

}

function validate(fieldArray) {
    var isValid = true;
    for(var i = 0; i < fieldArray.length; i++) {
        fieldArray[i].classList.remove("highlight-invalid");
        if(isNaN(parseInt(fieldArray[i].value))) {
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
        var parseE = parseInt(field.value);
        if(isNaN(parseE)) { continue; }
        else { sumOfInput += parseE; }
    }
    return sumOfInput / elementArray.length;
}

// TODO: GPA and input validation