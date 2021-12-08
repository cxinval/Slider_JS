
let start = 0;
const sliderWrap = document.querySelector('.slider-wrap');

document.querySelector('#next').addEventListener('click',function(){  
    start += 717;
    if(start > 2868){
        start = 0;
    }
    sliderWrap.style.left = -start + 'px';
    
});