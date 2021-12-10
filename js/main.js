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
let widths = {
    1: slider.nameItem.clientWidth = "8000px",
    2: slider.nameItem.clientWidth = "4263px",
    3: slider.nameItem.clientWidth = "2924px",
    4: slider.nameItem.clientWidth = "2175px",
    5: slider.nameItem.clientWidth = "2175px",
    6: slider.nameItem.clientWidth = "1727px",
};

function watch() {
    slider.nameItem.clientWidth = "4263px";
}

watch();

a = slider.nameItem
console.log(a.parentNot);

next.addEventListener('click', slider.swipeNext);
prev.addEventListener('click', slider.swipePrev);