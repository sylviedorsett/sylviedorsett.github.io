var date = new Date();
var currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let dateObj = new Date();
let month = monthNames[dateObj.getMonth()];
let day = String(dateObj.getDate()).padStart(2, '0');
let year = dateObj.getFullYear();
let output = month  + '\n'+ day  + ',' + year;

document.querySelector(".date").textContent = output;