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
let a = document.querySelectorAll('.slider-item');
let b = document.querySelectorAll('.sleder-items')
c = 0;
console.log(a);
for (let i = 0; a.length >= i; i++) {
    c = c + 1918;
    b.style.widht = c + "px";
}

// next.addEventListener('click', slider.swipeNext);
// prev.addEventListener('click', slider.swipePrev);