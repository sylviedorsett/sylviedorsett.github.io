console.log ("hello");

var mod = document.lastModified;
document.getElementById("last").innerHTML = mod;

var date = new Date();
var currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;