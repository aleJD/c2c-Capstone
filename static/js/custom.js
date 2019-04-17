function buttonClick() {
    var gradeInputArray = document.getElementsByClassName("grade-input");
    var validationResults = validate(gradeInputArray);
    if(!validationResults[0]) {
        highlightInvalid(validationResults[1]);
    }
    document.getElementById("answer").innerHTML =  sum() + "%"
}

function sum() {
    var gradeInputArray = document.getElementsByClassName("grade-input");
    var sumOfInput = 0;
    for(var i = 0; i < gradeInputArray.length; i++) {
        var field = gradeInputArray[i];
        var parseE = parseInt(field.value);
        if(isNaN(parseE)) { continue; }
        else { sumOfInput += parseE; }
    }
    return sumOfInput / 8;
}

function validate(fieldArray) {
    var isValid = true;
    var invalidList = [];
    var iLIndex = 0;
    for(var i = 0; i < fieldArray.length; i++) {
        var field = fieldArray[i];
        var parsedInput = parseInt(field.value);
        if(isNaN) {
            isValid = false;
            invalidList[iLIndex] = field;
            iLIndex++;
            continue;
        }
        if(parsedInput > 100 || parsedInput < 0) {
            isValid = false;
            invalidList[iLIndex] = field;
            iLIndex++;
        }
    }
    return [isValid, invalidList];
}

function highlightInvalid(fieldArray) {
    for(var i = 0; i < fieldArray.length; i++) {
        fieldArray[i].setAttribute("style", "border: 1px solid red;");
    }
}

// TODO: GPA and input validation