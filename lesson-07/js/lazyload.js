//get all imgs with data-src attribute
const images = document.querySelectorAll('img[data-src]');

//this function moves the path from data-src to src: when each img loaded the data-src is removed
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute('data-src'));
    
    image.onload = () => {image.removeAttribute('data-src');
    };
};

//"images" contains all the images, loadImages function moves the path from data-src to src
images.forEach((img) => {
    loadImages(img);
});

//parameters set for the Intersection Observer API
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};

//check to see if the IO API is supported and construct the Intersection Observer:
if ('IntersectionObserver' in winddow) {
const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    });
});
}       else {
            images.forEach((img) => {
                loadImages(img);
            });
}
