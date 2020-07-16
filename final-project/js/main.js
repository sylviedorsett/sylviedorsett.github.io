/* hamburger menu */
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("response");
}



/* dates */
var d = new Date ();
var date = d.getDate();
var day = d.getDay();
var month = d.getMonth();
var currentYear = d.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

/* year for copywrite */
document.getElementById("year").innerHTML = currentYear;

/* current date in footer */
var dateString = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + currentYear; 
document.getElementById("currentDate").innerHTML = dateString;

/* last modified date */
var lastModification = document.lastModified;
document.getElementById("lastMod").innerHTML = lastModification;


/* lazyload images */
const images = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 1,
};

if ('IntersectionObserver' in window) {
const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    });
}, imgOptions);
    
    images.forEach((pic) => {
    imgObserver.observe(pic);
    });
}
else {
    images.forEach((pic) => {
    loadImages(pic);
    });
}