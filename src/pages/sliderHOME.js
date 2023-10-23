const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const captions = slider.querySelectorAll('h1');
const previousBtn = slider.querySelector('.previous');
const nextBtn = slider.querySelector('.next');
let currentIndex = 0;
function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        captions[i].style.display = 'none';
        
    }


    images[index].style.display = 'block';
    captions[index].style.display = 'block';
}


function previousImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}


function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}


previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);


// Show the initial image
showImage(currentIndex);