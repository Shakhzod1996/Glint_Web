// To Top scroll
window.addEventListener('scroll', () => {
    let toTop = document.querySelector('.toTop');
    let headFlex = document.querySelector('.head-flex');
    let categoryFlex = document.querySelector('.categories-flex');

    if (window.scrollY > 100) {
        toTop.classList.add('toTop-active');
        headFlex.classList.add('head-flex-fixed');
        categoryFlex.classList.toggle('categories-flex-active');
    } else {
        toTop.classList.remove('toTop-active');
        headFlex.classList.remove('head-flex-fixed');
        categoryFlex.classList.remove('categories-flex-active');
    }
})

// Slider Owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        items:1,
        freeDrag: true,
        autoplaySpeed: 4000,
    });
});

// Home Active 
let menu = document.querySelector('.menu-first');
let menuIn = document.querySelector('.menu-home');
firstA = document.querySelector('.a')

firstA.addEventListener('click', () => {
    menuIn.classList.toggle('menu-home-active');
    mainShopIn.classList.remove('shop-inside-grid-act');
    firstA.classList.toggle('a-active-home');
    firstA1.classList.remove('a-active-shop');
    pageInside.classList.remove('page-inside-grid-act');
    firstA2.classList.remove('a2-active');
    elementsInside.classList.remove('elemets-inside-active');
    firstA3.classList.remove('a3-active');
    blogInside.classList.remove('blog-inside-active');
    firstA4.classList.remove('a4-active');
})

// Shop Active 
let menuShop = document.querySelector('.menu-shop');
let mainShopIn = document.querySelector('.shop-inside-grid');
firstA1 = document.querySelector('.a1')

firstA1.addEventListener('click', ()=> {
    mainShopIn.classList.toggle('shop-inside-grid-act');
    menuIn.classList.remove('menu-home-active');
    firstA1.classList.toggle('a-active-shop');
    firstA.classList.remove('a-active-home');
    pageInside.classList.remove('page-inside-grid-act');
    firstA2.classList.remove('a2-active');
    elementsInside.classList.remove('elemets-inside-active');
    firstA3.classList.remove('a3-active');
    blogInside.classList.remove('blog-inside-active');
    firstA4.classList.remove('a4-active');
})

// Pages Active
let menuPages = document.querySelector('.menu-pages');
let pageInside = document.querySelector('.page-inside-grid');
firstA2 = document.querySelector('.a2');

firstA2.addEventListener('click', ()=> {
    pageInside.classList.toggle('page-inside-grid-act');
    firstA.classList.remove('a-active-home');
    firstA1.classList.remove('a-active-shop');
    menuIn.classList.remove('menu-home-active');
    mainShopIn.classList.remove('shop-inside-grid-act');
    firstA2.classList.toggle('a2-active');
    elementsInside.classList.remove('elemets-inside-active');
    firstA3.classList.remove('a3-active');
    blogInside.classList.remove('blog-inside-active');
    firstA4.classList.remove('a4-active');
})

// Elements Hide
let menuElements = document.querySelector('.menu-elements');
let elementsInside = document.querySelector('.elemets-inside');
let firstA3 = document.querySelector('.a3');

firstA3.addEventListener('click', ()=> {
    elementsInside.classList.toggle('elemets-inside-active');
    firstA.classList.remove('a-active-home');
    firstA1.classList.remove('a-active-shop');
    menuIn.classList.remove('menu-home-active');
    mainShopIn.classList.remove('shop-inside-grid-act');
    pageInside.classList.remove('page-inside-grid-act');
    firstA2.classList.remove('a2-active');
    firstA3.classList.toggle('a3-active');
    blogInside.classList.remove('blog-inside-active');
    firstA4.classList.remove('a4-active');
})

// Blog Hide
let menuBlog = document.querySelector('.menu-blog');
let blogInside = document.querySelector('.blog-inside');
let firstA4 = document.querySelector('.a4');

firstA4.addEventListener('click', () => {
    blogInside.classList.toggle('blog-inside-active');
    elementsInside.classList.remove('elemets-inside-active');
    firstA.classList.remove('a-active-home');
    firstA1.classList.remove('a-active-shop');
    menuIn.classList.remove('menu-home-active');
    mainShopIn.classList.remove('shop-inside-grid-act');
    pageInside.classList.remove('page-inside-grid-act');
    firstA2.classList.remove('a2-active');
    firstA3.classList.remove('a3-active');
    firstA4.classList.toggle('a4-active');
})

// Category change

let leftCat = document.querySelector('.left-category');
let faBars = document.querySelector('.fa-bars');
let faTimes = document.querySelector('.fa-times');
let catInside = document.querySelector('.category-inside');

leftCat.addEventListener('click', () => {
    faBars.classList.toggle('fa-bars-active');
    faTimes.classList.toggle('fa-times-active');
    catInside.classList.toggle('category-inside-active');
})

// Menu Show mobile

let menuBtn = document.querySelector('.bx-menu');
let menuShow = document.querySelector('.menu');

menuBtn.addEventListener('click', ()=> {
    menuShow.classList.toggle('menu-show')
})










