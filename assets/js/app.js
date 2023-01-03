const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Slider

const slides = [...$$('.slide-item')];
const dots = [...$$('.slide_dot-item')];
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Modal
const btnUserLogin = $('.header__admin-login');
const modal = $('#modal');
const btnCancels = [...$$('.form-cancel')];
const forms = [...$$('.form')];
const btnLogin = $('.form-login');
const btnRegister = $('.form-register');
const form1 = $('#form-1');
const form2 = $('#form-2');

btnUserLogin.onclick = function() {
    modal.style.display = 'flex';
}

modal.onclick = function() {
    modal.style.display = 'none';
}

for(let i = 0; i < btnCancels.length; ++i) {
    btnCancels[i].onclick = function() {
        modal.style.display = 'none';
    }
}

for(let i = 0; i < forms.length; ++i) {
    forms[i].onclick = function(e) {
        e.stopPropagation();
    }
}

btnLogin.onclick = function() {
    form1.style.display = 'none';
    form2.style.display = 'block';
}

btnRegister.onclick = function() {
    form2.style.display = 'none';
    form1.style.display = 'block';
}


// Nav Tablet
const headerBar = $('.header__bars');
const navTablet = $('.nav__tm');
const navTabletClose = $('.nav__tm-close');
const overlay = $('.header__overlay');

headerBar.onclick = function() {
    navTablet.style.display = 'block';
    overlay.style.display = 'block';
}

navTabletClose.onclick = function(e) {
    navTablet.style.display = 'none';
    overlay.style.display = 'none';
    e.stopPropagation();
}

overlay.onclick = function(e) {
    navTablet.style.display = 'none';
    overlay.style.display = 'none';
    e.stopPropagation();
}

// Slide mobile
const imgSlideM = $$('.slide-img')
window.onresize = function() {
    if (window.innerWidth < 1024) {
        for(let i = 0; i<imgSlideM.length; i++) {
            imgSlideM[i].attributes.src.nodeValue = `./assets/img/slide${i+1}m.jpg`
        }
    } else {
        for(let i = 0; i<imgSlideM.length; i++) {
            imgSlideM[i].attributes.src.nodeValue = `./assets/img/slide${i+1}.jpg`
        }
    }
}
