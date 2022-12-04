
// keritav kuumade pakkumiste sektsioon avalehel
//Swiperjs
// Kood võetud lehelt https://swiperjs.com/demos alamlehtedelt "Responsive breakpoints" ning "Autoplay"
let swiper = new Swiper(".vehicles_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,

    //https://stackoverflow.com/questions/71159693/no-mousewheel-but-do-need-touchpad-support-for-swiperjs
    mousewheel: {
        forceToAxis: true
    },
    loop:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
    },
});