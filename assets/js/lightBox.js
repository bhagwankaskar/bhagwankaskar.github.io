let currentSlide = 0; // Current Slide
let images = []; // Images Array

// Images List
images[0] = 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg';
images[1] = 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg';
images[2] = 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg';
images[3] = 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg';
images[4] = 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg';
images[5] = 'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg';

// Opens Lightbox
function openModal() {
    document.querySelector(".lightboxContainer").style.display = "flex";
    document.body.style.overflow = "hidden";
    document.querySelector(".gallery").style.filter = "blur(5px)";
}

// Closes Lightbox
function closeModal() {
    document.querySelector(".lightboxContainer").style.display = "none";
    document.body.style.overflow = "initial";  
    document.querySelector(".gallery").style.filter = "blur(0)";
}

// Sets Current Image to Lightbox when clicked
// Returns the Current Slide Index
function changeImage(n) {
    document.activeImage.src = images[n];
    currentSlide = n;
    return currentSlide;
}

// Cycles Through Images
// n is either 1 (next slide) or -1 (previous slide)
function nextSlide(n) {

    if (currentSlide < 1 && n == -1) {
        //IF at first slide AND selecting previous slide
        currentSlide = images.length - 1;
        document.activeImage.src = images[currentSlide];
        return currentSlide;

    } else if (currentSlide < images.length - 1 && currentSlide >= 0 && n == 1) {
        //IF at any slide besides the last AND going up
        currentSlide = currentSlide + 1;
        document.activeImage.src = images[currentSlide];
        return currentSlide;

    } else if (currentSlide == images.length - 1 && n == 1) {
        //IF at final slide last AND going up
        currentSlide = 0;
        document.activeImage.src = images[currentSlide];
        return currentSlide;

    } else {
        //Anything else (going down AND not at first slide)
        currentSlide = currentSlide - 1;
        document.activeImage.src = images[currentSlide];
        return currentSlide;

    }
}