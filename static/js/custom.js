console.log("Hello World!");

var warningLabel = document.createElement("p");
warningLabel.appendChild(document.createTextNode("Please fill out all fields."));
warningLabel.classList.add("centered-text");

function submitButtonClicked() {

    try {
        document.getElementById("services").removeChild(warningLabel);
    } catch(DOMException) {
        var time = new Date();
        console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
    }

    var gradeInputArray = document.getElementsByClassName("grade-input");

    if(validate(gradeInputArray)) {
        document.getElementById("answer").innerHTML = average(gradeInputArray) + "%";
    } else {
        document.getElementById("services").appendChild(warningLabel);
    }

}

function validate(fieldArray) {
    var isValid = true;
    for(var i = 0; i < fieldArray.length; i++) {
        fieldArray[i].classList.remove("highlight-invalid");
        var parsed = parseInt(fieldArray[i].value);
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
        var parseE = parseInt(field.value);
        if(isNaN(parseE)) { continue; }
        else { sumOfInput += parseE; }
    }
    return sumOfInput / elementArray.length;
}

// TODO: GPA and input validation