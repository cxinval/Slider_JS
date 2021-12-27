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

function RealSlider(elementId, options) {
    let slider = {
        state: {
            currentPage: 1, // текущая страница в слайдере
            pages: null, // всего страниц в слайдере
            itemPerPage: 2, // количество элементов на одной странице
            transformOffset: 0, // смещение свойства transform при слайде. @todo: я думаю это не самое удачное решение. Намного лучше чтобы мы перемещали слайды в DOM, а не меняли transform

            elements: {
                sliderWrap: null, // Контейнер обертка для слайдера
                sliderItemsWrap: null, // Контейнер обертка для элементов слайдера
                sliderItems: null, // // Все элементы слайдера
                bulitsContainer: null, // Контейнер обертка для страниц слайдера
                next: null, // Кнопка вперед
                prev: null, // Кнопка назад
            }
        },
        option: {
            elements: {
                sliderWrap: null, // Контейнер обертка для слайдера
                sliderItemsWrap: null, // Контейнер обертка для элементов слайдера
                sliderItems: null, // // Все элементы слайдера
                bulitsContainer: null, // Контейнер обертка для страниц слайдера
                next: null, // Кнопка вперед
                prev: null, // Кнопка назад
            },
            // setPosition: this.sliderItem.style.transform = `translateX(${position}px)`
        },

        // Это наш конструктор. В нем мы хотим определить начальные настройки, дорисовать все что нужно, и повесить обработчики
        init: function(elementId, options) {
            // сперва надо проверить что есть элемент с id elementId.
            this.state.sliderElement = document.querySelector(elementId);
            if (!this.state.sliderElement) {
                console.log('Slider initialization error. Element #' + elementId + ' not found');
                return false;
            }

            // тут мы хотим проверить что в options указано все что нам необходимо и значения верные.
            // то есть сохраняем наши конфиги из options в наш слайдер.
            if (options.sliderWrap) {
                this.state.sliderWrap = options.sliderWrap;
            }
            if (options.itemPerPage) {
                this.state.itemPerPage = options.itemPerPage;
            }

            // Тут мы сохраним элементы которые нужны для дальнейшей работы
            this.state.elements = {
                sliderWrap: this.state.sliderElement.querySelector(".slider-wrap"),
                sliderItemsWrap: this.state.sliderElement.querySelector(".slider-items"),
                 sliderItems: this.state.sliderElement.querySelectorAll(".slider-item"),
                    // bulit: document.querySelectorAll(".slider-bulit"),
                    bulletsContainer: this.state.sliderElement.querySelector('.slider-bulits'),
                    next: this.state.sliderElement.querySelector('.next'),
                    prev: this.state.sliderElement.querySelector('.prev'),
            }

            // вычисляем количество в счетчике страниц
            const itemWidth = this.state.elements.sliderItemsWrap.clientWidth / this.state.itemPerPage;
            this.state.elements.sliderItems.forEach((item) => {
                item.style.minWidth = itemWidth + "px"
            })

            // вычисляю смещение для перехода страниц
            this.state.transformOffset = this.state.itemPerPage * itemWidth;

            // сколько всего страниц
            this.state.pages = this.state.elements.sliderItems.length / this.state.itemPerPage
            // отображаю точки переключения страниц в слайдере
            this.state.elements.bulletsContainer.innerHTML = '';
            for (let i = 1; i <= this.state.pages; i++) {
                let bullet = document.createElement('div')
                bullet.setAttribute('class', 'slider-bulit ' + ((i === this.state.currentPage) ? 'active' : ''))
                this.state.elements.bulletsContainer.append(bullet)
            }


            // тут мы хотим инициализировать все события.
            // Нужно четко понимать как работает this. @see: https://learn.javascript.ru/object-methods
            this.state.elements.next.addEventListener('click', this.next.bind(this)) // !!!! разберись зачем тут нужен bind
            this.state.elements.prev.addEventListener('click', this.prev) // сравни что будет в prev без bind.

            return this
        },

        next: function () {
            console.log(this, this.state.sliderElement.getAttribute('id'));

            if (this.state.currentPage + 1 > this.state.pages) {
                // мы вышли за предел слайдера
            } else {
                let position = this.state.transformOffset * this.state.currentPage;
                this.state.currentPage++;
                this.state.elements.sliderItemsWrap.style.transform = `translateX(-${position}px)`;

                // отображаю точки переключения страниц в слайдере
                this.state.elements.bulletsContainer.innerHTML = '';
                for (let i = 1; i <= this.state.pages; i++) {
                    let bullet = document.createElement('div')
                    bullet.setAttribute('class', 'slider-bulit ' + ((i === this.state.currentPage) ? 'active' : ''))
                    this.state.elements.bulletsContainer.append(bullet)
                }
            }
        },

        prev: function () {
            console.log(this);
        },
    }

    return slider.init(elementId, options) // можно отрефакторить покрасивее. Избавиться от вызова init метода
}

/**
 * Тут мы хотим использовать два слайдера
 */
var slider1 = new RealSlider('#slider1', {});
var slider2 = new RealSlider('#slider2', {itemPerPage: 3});
