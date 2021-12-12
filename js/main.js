// let meaning = 0;
// let next = document.querySelector(".next");


// let slider = {
//     nameItem: document.querySelector(".slider-items"),
//     swipeNext: function swipe() {
//         meaning = meaning + 113.8;
//         if (meaning > 455.2) {
//             meaning = 0
//         }
//         slider.nameItem.style.left = -meaning + "em";
//     },
//     swipePrev: function swipe() {
//         meaning = meaning - 113.8;
//         if (meaning < 0) {
//             meaning = 455.2;
//         }
//         slider.nameItem.style.left = -meaning + "em";
//     },

// };

// next.addEventListener('click', slider.swipeNext);
// prev.addEventListener('click', slider.swipePrev);


// Test

let position = 0;
let slidesToShow = 3;
let slidesToScroll = 2;
let sliderWrap = document.querySelector(".slider-wrap");
let sliderItems = document.querySelector(".slider-items");
let sliderItem = document.querySelector(".slider-item");
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let itemWidth = sliderWrap.clientWidth / slidesToShow;

// Object.entries(sliderItem).forEach((item) => {
//     console.log(item)
// })

console.log(typeof sliderItem);