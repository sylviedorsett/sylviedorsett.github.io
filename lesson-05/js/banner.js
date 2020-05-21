var d = new Date ();
var date = d.getDate();
var day = d.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const banner = document.getElementById("banner")

if (day == 4) {
     banner.style.display = "block";
}
else {
    banner.style.display = "none";
}