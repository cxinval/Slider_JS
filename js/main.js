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
let slidesToShow = 2;
let slidesToScroll = 1;
let sliderWrap = document.querySelector(".slider-wrap");
let sliderItems = document.querySelector(".slider-items");
let sliderItem = document.querySelectorAll(".slider-item");
let bulit = document.querySelectorAll(".slider-bulit")
let builds = document.querySelector('.slider-bulits')
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let itemWidth = sliderWrap.clientWidth / slidesToShow;
let movePosition = slidesToScroll * itemWidth;
let itemCount = sliderItem.length;




// next.addEventListener("click", function() {

//     sliderItem.forEach((item, i) => {

//     })


//     position -= movePosition
//     setPosition();
// })



// prev.addEventListener("click", function() {
//     position += movePosition
//     setPosition();
//     // checkBtn();
// })



// function setPosition() {
//     sliderItems.style.transform = `translateX(${position}px)`;
// }

// function checkBtn() {
//     if (position === 0) {
//         prev.style.display = 'none'
//     } else {
//         prev.style.display = 'block'
//     }

// }


// checkBtn()

let RealSlider = {
    state: {
        position: 0,
        slidesToShow: 2,
        slidesToScroll: 1,
    },
    option: {
        link: {
            sliderWrap: document.querySelector(".slider-wrap"),
            sliderItems: document.querySelector(".slider-items"),
            sliderItem: document.querySelectorAll(".slider-item"),
            bulit: document.querySelectorAll(".slider-bulit"),
            builds: document.querySelector('.slider-bulits'),
            next: document.querySelector('.next'),
            prev: document.querySelector('.prev'),
        },
        pay: {
            itemWidth: sliderWrap.clientWidth / slidesToShow,
            movePosition: slidesToScroll * itemWidth,
            itemCount: sliderItem.length
        },
        buttons: {
            nextArrow: this.next.addEventListener("click", function() {
                console.log(1)
            }),
            nextArrow: this.prev.addEventListener("click", function() {
                console.log(2)
            })
        },
        setPosition: this.sliderItem.style.transform = `translateX(${position}px)`

    }
}





// prev.addEventListener("click", function() {
//     position += movePosition
//     setPosition();
//     // checkBtn();
// })
// sliderItem.forEach((item) => {
//     item.style.minWidth = itemWidth + "px"
// })