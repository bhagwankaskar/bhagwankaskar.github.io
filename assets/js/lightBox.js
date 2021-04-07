let currentSlide = 0; // Current Slide
let images = []; // Images Array

// Images List
images[0] = './images/shree_gallery_1.jpg';
images[1] = './images/shree_gallery_2.jpg';
images[2] = './images/shree_gallery_3.jpg';
images[3] = './images/shree_gallery_4.jpg';
images[4] = './images/shree_gallery_5.jpg';
images[5] = './images/shree_gallery_6.jpg';
images[6] = './images/shree_gallery_7.jpg';
images[7] = './images/shree_gallery_8.jpg';
images[8] = './images/shree_gallery_9.jpg';
images[9] = './images/shree_gallery_10.jpg';
images[10] = './images/shree_gallery_11.jpg';
images[11] = './images/shree_gallery_12.jpg';
images[12] = './images/shree_gallery_13.jpg';
images[13] = './images/shree_gallery_14.jpg';
images[14] = './images/shree_gallery_15.jpg';
images[15] = './images/shree_gallery_16.jpg';
images[17] = './images/shree_gallery_18.jpg';
images[18] = './images/shree_gallery_19.jpg';
images[19] = './images/shree_gallery_20.jpg';
images[20] = './images/shree_gallery_21.jpg';
images[21] = './images/shree_gallery_22.jpg';
images[22] = './images/shree_gallery_23.jpg';
images[23] = './images/shree_gallery_24.jpg';
images[24] = './images/shree_gallery_25.jpg';
images[25] = './images/shree_gallery_26.jpg';
images[26] = './images/shree_gallery_27.jpg';
images[27] = './images/shree_gallery_28.jpg';
images[28] = './images/shree_gallery_29.jpg';
images[29] = './images/shree_gallery_30.jpg';
images[30] = './images/shree_gallery_31.jpg';
images[31] = './images/shree_gallery_32.jpg';
images[32] = './images/shree_gallery_33.jpg';
images[33] = './images/shree_gallery_34.jpg';



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