function buttonClick() {
    var add = sum();
    add/= 8;
    document.getElementById("answer").innerHTML = add + "%"
}

function sum() {
    var gradeInputArray = document.getElementsByClassName("grade-input");
    var sumOfInput = 0;
    for(var i = 0; i < gradeInputArray.length; i++) {
        var e = gradeInputArray[i];
        var parseE = parseInt(e.value);
        if(isNaN(parseE)) { continue; }
        else { sumOfInput += parseE; }
    }
    return sumOfInput;
}