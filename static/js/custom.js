var clicks = 0;

function submit() {
    clicks++;
    document.getElementById("nein").innerHTML = "lmao" + clicks;
    alert("i changed this: " + clicks);
}