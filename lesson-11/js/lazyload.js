//get all imgs with data-src attribute
const images = document.querySelectorAll('img[data-src]');

//this function moves the path from data-src to src: when each img loaded the data-src is removed
const loadImages = (image) => {
    //sets the 'src' attribute to replace the 'data-src' attribute
    image.setAttribute('src', image.getAttribute('data-src'));
    //removes the data-src attribute:
    image.onload = () => {image.removeAttribute('data-src');
    };
};

//parameters set for the Intersection Observer API
const imgOptions = {
    threshold: 1,
};

//check to see if the IO API is supported and construct the Intersection Observer:
if ('IntersectionObserver' in window) {
const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    });
}, imgOptions);

    //load images if necessary
    images.forEach((img) => {
    imgObserver.observe(img);
    });

//loads all the images if the Intersection Observer if it is not available to the browser
}
else {
    images.forEach((img) => {
    loadImages(img);
    });
}
