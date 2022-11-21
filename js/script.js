

// telefonide peal navbaril menüü nupule vajutamine, muudab menüü ikooni ristiks ning teeb navbari nähtavaks
let menu = document.querySelector('#menu_button');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//sulgeb menüü kerides
window.onscroll = () =>{

    // muudab navbari kõrgust üles/alla kerides
    let header = document.querySelector('header')
    if(window.scrollY > 0){
        header.classList.add('active')
    }
    else {
        header.classList.remove('active')
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// animeerib navbari lehe laadimisel
window.onload = () =>{

    let header = document.querySelector('header')
    if(window.scrollY > 0){
        header.classList.add('active')
    }
    else {
        header.classList.remove('active')
    }

}

// keritav kuumade pakkumiste sektsioon
//Swiperjs
// Kood võetud lehelt https://swiperjs.com/demos alamlehtedelt "Responsive breakpoints" ning "Autoplay"
let swiper = new Swiper(".vehicles_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
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