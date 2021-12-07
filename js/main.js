let slide = 0;
let sliderItems = document.querySelector ('.slider-items');

document.querySelector('.next').addEventListener('click',function(){  
slide = slide + 1140;
sliderItems.style.left = slide . px; 
});