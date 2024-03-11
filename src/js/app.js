import * as flsFunctions from "./modules/functions.js";

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
 
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});