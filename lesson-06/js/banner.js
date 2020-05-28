var d = new Date ();
var date = d.getDate();
var day = d.getDay();
var month = d.getMonth();
var currentYear = d.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


/* This is the js for the year copywrite.*/
document.getElementById("year").innerHTML = currentYear;


/* This is the js for the banner.*/
const banner = document.getElementById("banner")
if (day == 5) {
     banner.style.display = "block";
}
else {
    banner.style.display = "none";
}

/* This is the js for the hamburger menu.*/
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("response");
}


/* This is the js for the current date in the footer*/
var dateString = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + currentYear; 
document.getElementById(".date").innerHTML = dateString;

