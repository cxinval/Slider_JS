let sliderWrap  = document.querySelectorAll(' .slider-wrap .slider-items img');
current = 0;
function slider (){
    for(let i; sliderWrap.length < i; i++){
        sliderWrap[0].classList.add('active');
    }
}

document.querySelector('.next').onclick = slider;