let slider_index = 0
const slides = document.querySelectorAll(".slider__cont");
const slidesTotal = slides.length;

const cambioSlide = ()=>{
    slider_index = (slider_index + 1) % slidesTotal;
    document.querySelector(".slider__data").style.transform = (`translateX(-${slider_index *25}%)`);
}

setInterval(cambioSlide, 3500)