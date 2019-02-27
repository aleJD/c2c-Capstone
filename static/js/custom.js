function submitForm() {
    var firstName = document.forms["infoForm"]["FirstName"].value;
    for(int i = 0; i < 10; i++) {
        if(firstName.contains(i)) {
            alert("First name contains a number.");
            return false;
        }
    }
}