var t = parseFloat(document.getElementById("temp").innerHTML);
var s = parseFloat(document.getElementById("windSpeed").innerHTML);

var chill = 35.74 + .6215 * t - 35.75 * Math.pow(s, .16) +  .4275 * t * Math.pow(s, .16);

if (t < 51 && s > 3) {
    document.getElementById("windChill").innerHTML = Math.round(chill);
}
else {
    document.getElementById("windChill").innerHTML = "N/A";
}