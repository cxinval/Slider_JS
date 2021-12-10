let meaning = 0;
let next = document.querySelector(".next");


let slider = {
    nameItem: document.querySelector(".slider-items"),
    swipeNext: function swipe() {
        meaning = meaning + 113.8;
        if (meaning > 455.2) {
            meaning = 0
        }
        slider.nameItem.style.left = -meaning + "em";
    },
    swipePrev: function swipe() {
        meaning = meaning - 113.8;
        if (meaning < 0) {
            meaning = 455.2;
        }
        slider.nameItem.style.left = -meaning + "em";
    },

};

function watch() {
    slider.nameItem.classList.add('wight_5')
}

watch();




next.addEventListener('click', slider.swipeNext);
prev.addEventListener('click', slider.swipePrev);