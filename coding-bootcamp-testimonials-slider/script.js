let currentImageIndex = 0;

const slides = document.querySelectorAll('.card');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');


function getNextIndex(currentIndex){
    return (currentIndex + 1) % slides.length;
}

function getPrevIndex(currentIndex){
    return currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
}

prevBtn.addEventListener('click', () => {
    const prevImageIndex = getPrevIndex(currentImageIndex);

    slides[currentImageIndex].classList.toggle('active');
    slides[currentImageIndex].classList.remove('anim-right-in', 'anim-left-in');
    slides[prevImageIndex].classList.toggle('active');
    slides[prevImageIndex].classList.add('anim-right-in');

    currentImageIndex = prevImageIndex;
});

nextBtn.addEventListener('click', () => {
    const nextImageIndex = getNextIndex(currentImageIndex);
    
    slides[currentImageIndex].classList.toggle('active');
    slides[currentImageIndex].classList.remove('anim-right-in', 'anim-left-in');
    slides[nextImageIndex].classList.toggle('active');
    slides[nextImageIndex].classList.add('anim-left-in');

    currentImageIndex = nextImageIndex;
});