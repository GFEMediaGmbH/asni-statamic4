import Alpine from 'alpinejs';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

window.Alpine = Alpine;
Alpine.start();

 
const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 2000,
    },
});
